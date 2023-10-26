import { SET_USER, SET_GUEST_MODE } from "../actions/actionTypes";

const initialState={
  user: null,
  guestMode: false,
};
const userReducer = (state=initialState, action)=>{
  switch(action.type){
    case SET_USER : 
      return {...state, user: action.user};
    case SET_GUEST_MODE : 
      return {...state, guestMode: action.payload};
    default: 
    return state;
  }
}
export default userReducer;