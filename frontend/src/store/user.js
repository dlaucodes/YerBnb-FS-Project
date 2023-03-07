import csrfFetch from "./csrf";
import * as sessionActions from "./session";

const RECEIVE_USERS = 'users/RECEIVE_USERS';
const RECEIVE_USER = 'users/RECEIVE_USER';


export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    payload: user
  });
  
  export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    payload: users
  });

export const fetchUsers = () => async dispatch => {
    const res = await csrfFetch('/api/users')
    if (res.ok) {
        const data = await res.json();
        dispatch(receiveUsers(data.users));
    }
};

export const updateUser = (user) => async dispatch => {
    const res = await csrfFetch(`/api/users/${user.id}`, {
        method: "PATCH",
        body: user
    });
    const data = await res.json();
    dispatch(sessionActions.getCurrentUser(data));
    return res;
};

const usersReducer = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_USER:
            return {...state, user: action.payload}
        case RECEIVE_USERS:
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export default usersReducer;