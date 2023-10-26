// 
// here you define the actions creator to be bassed to your dispatch functions
// 
import * as actions from "./actionTypes"

export const setUser = (payload)=> {
  return {
    type: actions.SET_USER,
    user: payload,
  }
}
export const setArticlesIsLoading = (payload)=>{
  return {
    type: actions.SET_ARTICLES_LOADING,
    payload: payload,
  }
}
export const setFetchedArticles = (payload)=>{
  return {
    type: actions.GET_ARTICLES,
    payload: payload,
  }
}
export const setGuestMode = (payload)=>{
  return {
    type: actions.SET_GUEST_MODE,
    payload: payload,
  }
}
export const addGuestPost = (payload)=>{
  return {
    type: actions.GUEST_POST,
    payload: payload,
  }
}