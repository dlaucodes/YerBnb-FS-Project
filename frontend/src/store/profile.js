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

export const fetchUser = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/users/${id}`)

    let data = await res.json();
    
    return res;
};


const usersReducer = (state = [], action) => {
    switch(action.type){
        case RECEIVE_USER:
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export default usersReducer;