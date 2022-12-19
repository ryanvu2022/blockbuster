import { AUTH, LOGOUT } from "../constants/actionTypes";

const authReducers = (state = { authData: null }, action) => {
   switch (action.type) {
      case AUTH:    
         window.localStorage.setItem("profile", JSON.stringify(action?.payload));
         return {...state, authData: action?.payload};
      case LOGOUT:
         window.localStorage.clear();
         return {...state, authData: null};
      case "SIGNIN":
      case "SIGNUP":
         window.localStorage.setItem("profile", JSON.stringify(action?.payload.user));
         return {...state, authData: action?.payload.user};     
      default:
         return state;
   }
}

export default authReducers;