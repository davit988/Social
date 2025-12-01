import { socialAPI } from "../../api/api";

const LOGIN = "login";

const initSate = {
  userId: null,
};

const authReduccer = (state = initSate, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userId: action.payload,
      };
    default:
      return state;
  }
};

const loginAC = (data) => ({ type: LOGIN, payload: data });

export const loginThunk = (body) => {
  return (dispatch) => {
    socialAPI.login(body).then((res) => {
      dispatch(loginAC(res.data.data.userId));
      localStorage.setItem('userId',res.data.data.userId)
    });
  };
};

export default authReduccer;
