import { registerUserWithEmailPassword, signInWithGoogle } from "../firebase/providers";
import { checkingCredentials, login, logout } from "./auth/authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const result = await signInWithGoogle();
    console.log({ result })
    if (!result.ok) return dispatch(logout())
    dispatch(login(result))
  };
}


export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {

  return async (dispatch) => {
    dispatch(checkingCredentials())
    const res = await registerUserWithEmailPassword({ password, email, displayName })
    console.log(res)
  }
}