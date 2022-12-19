import * as api from '../api';
import { SIGNIN, SIGNUP } from "../constants/actionTypes";

const signin = (inputText) => async(dispatch) => {
   try {
      const { data } = await api.signin(inputText);
      dispatch({
         type: SIGNIN, 
         payload: data
      })
      window.location.replace("/");
   } catch (error) {
      console.log(error);
   }
}

const signup = (inputText) => async(dispatch) => {
   try {
      const { data } = await api.signup(inputText);
      dispatch({
         type: SIGNUP, 
         payload: data
      })
      window.location.replace("/");
   } catch (error) {
      console.log(error);
   }
}

export { signin, signup };