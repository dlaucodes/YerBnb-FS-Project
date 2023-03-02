import csrfFetch from "./csrf";
import * as sessionActions from "./session";

const ADD_USERS = 'users/addUsers';
const ADD_USER = 'users/addUser';


export const addUser = (user) => ({
    type: ADD_USER,
    payload: user
  });
  
  export const addUsers = (users) => ({
    type: ADD_USERS,
    payload: users
  });

export const fetchUsers = () => async dispatch => {
    const res = await csrfFetch('/api/users')
    if (res.ok) {
        const data = await res.json();
        dispatch(addUsers(data.users));
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
        case ADD_USER:
            return {...state, user: action.payload}
        case ADD_USERS:
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export default usersReducer;