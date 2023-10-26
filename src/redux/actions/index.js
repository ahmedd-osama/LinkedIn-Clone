// 
// Here, you can define all the actions to be excuted using Thunks and async thunks and the dispatching is passed down to excute the specific action with action type once the logic is finished
// 

import { auth, AuthProvider, db, storage } from "../../firebase"
import {signInWithPopup} from 'firebase/auth'
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage'
import {collection, addDoc, query, orderBy, onSnapshot} from 'firebase/firestore'
import { setUser, setArticlesIsLoading,setFetchedArticles, addGuestPost, setGuestMode } from "./actions"
export function signInAPI(){
  return (dispatch)=>{
    signInWithPopup(auth, AuthProvider).then((payload)=>{
      dispatch(setUser(payload.user));
    }).catch(err => alert(err.message));
  }
}
export function getUserAuth(){
  //to change user account which is stored in redux in case there is a sign out or change in the signed user
  return (dispatch)=>{
    auth.onAuthStateChanged(async (user)=>{
      if(user){
        dispatch(setUser(user));
      }
    })
  }
}
export function signOutAPI(){
  // the async is handled by the async thunk middleware which we applied using redux 
  return (dispatch)=>{
    auth.signOut()
    .then(()=>{dispatch(setUser(null)); dispatch(setGuestMode(false))})
    .catch(err => alert(err.message));
  }
}
// articles 
export function newPostAPI(payload){
  // the async is handled by the async thunk middleware which we applied using redux 
  return (dispatch)=>{
    dispatch(setArticlesIsLoading(true));
    if(payload.assetType === 'image'){
      const storageRef = ref(storage,  `images/${payload.image.name}`); // defining where to store the image in the firebase cloude space (sorage, path)
      const uploadRef = uploadBytesResumable(storageRef, payload.image); // start uploading

      uploadRef.on('state_changed', (snapshot)=>{
        const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done.`);

      }, error=> alert(error) , 
        ()=>{
          getDownloadURL(uploadRef.snapshot.ref).then(downloadURL=>{
            const collRef = collection(db, 'post');
            addDoc(collRef, {
              user:{
                description: payload.user.email,
                displayName: payload.user.displayName,
                photoURL: payload.user?.photoURL || '/images/user.svg',
                date: payload.timeStamp,
              },
              comments: [],
              video: payload.video,
              image: downloadURL,
              postDescription: payload.postDetails,
            });
            // updating isLoading state
            dispatch(setArticlesIsLoading(false));
          });
        }
      );
    } else if (payload.assetType === 'video' || payload.assetType === ''){
        // video asset
        const collRef = collection(db, 'post');
        addDoc(collRef, {
          user:{
            description: payload.user.email,
            displayName: payload.user.displayName,
            photoURL: payload.user?.photoURL || '/images/user.svg',
            date: payload.timeStamp,
          },
          comments: [],
          video: payload.video,
          image: payload.image,
          postDescription: payload.postDetails,
        }).then(()=>{
          // updating isLoading state
          dispatch(setArticlesIsLoading(false));
        })
    }
  }
}
export function getArticlesAPI(){
  return (dispatch)=>{
    let payload = [];
    const collRef = collection(db, 'post');
    const orderedRef = query(collRef, orderBy('user.date', 'desc'));
    onSnapshot( orderedRef, (snapshot)=>{
      payload = snapshot.docs.map(doc => doc.data())
      dispatch(setFetchedArticles(payload))
    })
    // dispatch(setFetchedArticles([{user: {name: 'Ahmed', email: 'ahmed@example.com', photoURL: '/images/user.svg'}, timeStamp: '10/25/2023', postDescription: 'details', image: '' ,video:'https://youtu.be/-LJMgk3OEGc', comments: []},{user: {name: 'Ahmed', email: 'ahmed@example.com', photoURL: '/images/user.svg'}, timeStamp: '10/25/2023', postDescription: 'details', image: '' ,video:'https://youtu.be/-LJMgk3OEGc', comments: []}]))
  }
}
export function newGuestPost(payload){
  return (dispatch)=>{
    const formatedPayload = {
      user:{
        description: payload.user.email,
        displayName: payload.user.displayName,
        photoURL: payload.user?.photoURL || '/images/user.svg',
        date: payload.timeStamp,
      },
      comments: [],
      video: payload.video,
      image:  payload.image? URL.createObjectURL(payload.image) : '',
      postDescription: payload.postDetails,
    }
    dispatch(addGuestPost(formatedPayload))
  }
}