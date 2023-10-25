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