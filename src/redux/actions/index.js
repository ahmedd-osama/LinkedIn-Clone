// 
// Here, you can define all the actions to be excuted using Thunks and async thunks and the dispatching is passed down to excute the specific action with action type once the logic is finished
// 

import { auth, AuthProvider } from "../../firebase"
import {signInWithPopup} from 'firebase/auth'
import { setUser } from "./actions"
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
    .then(()=>{dispatch(setUser(null))})
    .catch(err => alert(err.message));
  }
}
// articles 
// export function signOut(){

// }