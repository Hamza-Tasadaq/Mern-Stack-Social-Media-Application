import * as api from "../api";
import { SIGN_UP, SIGN_IN, AUTH } from "./actionTypes";

const signIn = (formData, history) => {
  return async (dispatch) => {
    try {
      const { data } = await api.signIn(formData);
      dispatch({ type: AUTH, data });
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };
};

const signUp = (formData, history) => {
  return async (dispatch) => {
    try {
      const { data } = await api.signUp(formData);

      console.log(data);
      dispatch({ type: AUTH, data });
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };
};

export { signIn, signUp };
