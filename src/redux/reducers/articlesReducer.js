import * as actions from '../actions/actionTypes'
const initialState={
  isLoading: false,
  articles: [],
  isError: false,
  error: null
};
const articlesReducer = (state=initialState, {type, payload})=>{
  switch(type){
    case actions.SET_ARTICLES_LOADING : 
      return {...state, isLoading: payload};
      case actions.GET_ARTICLES : 
      return {...state, articles: payload};
      case actions.GUEST_POST : 
      return {...state, articles: [payload, ...state.articles]};
    default: 
    return state;
  }
}
export default articlesReducer;