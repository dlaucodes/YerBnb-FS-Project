import csrfFetch from "./csrf";

const RECEIVE_USER = "users/RECEIVE_USER";
const REMOVE_USER = "users/REMOVE_USER";

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    payload: user,
  }
};

export const removeUser = () => {
  return {
    type: REMOVE_USER
  }
};

const storeCSRFToken = (res) => {
  const csrfToken = res.headers.get("X-CSRF-Token");
  if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
};

const storeCurrentUser = (user) => {
  if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
  else sessionStorage.removeItem("currentUser");
};

export const loginUser = (user) => async (dispatch) => {
  debugger
  const {username, password} = user;
  const res = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({
      username,
      password
    }),
  });

  let data = await res.json();
  storeCurrentUser(data.user);
  dispatch(receiveUser(data.user));
  return res;
};

export const logoutUser = () => async (dispatch) => {
  const res = await csrfFetch("/api/session", {
    method: "DELETE",
  });
  sessionStorage.setItem("currentUser", null);
  dispatch(removeUser());
  return res;
};

export const signup = (user) => async (dispatch) => {
  const { username, password, firstName, lastName } = user;
  const res = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
      firstName,
      lastName
    }),
  });
  const data = await res.json();
  storeCurrentUser(data.user);
  dispatch(receiveUser(data.user));
  return res;
};

export const restoreSession = () => async (dispatch) => {
  const res = await csrfFetch("/api/session");
  storeCSRFToken(res);
  const data = await res.json();
  storeCurrentUser(data.user);
  dispatch(receiveUser(data.user));
  return res;
};

const initialState = {
  user: JSON.parse(sessionStorage.getItem("currentUser")),
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_USER:
      return { ...state, user: null }
    case RECEIVE_USER:
       return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default sessionReducer;
