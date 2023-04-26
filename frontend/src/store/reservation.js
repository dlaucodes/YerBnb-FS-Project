import csrfFetch from "./csrf";

const RECEIVE_RESERVATION = "reservations/RECEIVE_RESERVATION";
const REMOVE_RESERVATION = "reservations/REMOVE_RESERVATION";
const RECEIVE_RESERVATIONS = "reservations/RECEIVE_RESERVATIONS";

export const receiveReservation = (reservation)=>{
    return{
        type: RECEIVE_RESERVATION,
        payload: reservation
    }
};

export const receiveReservations = (reservations) =>{
    return{
        type: RECEIVE_RESERVATIONS,
        payload: reservations
    }
}

export const removeReservation = (reservationId) =>{
    return{
        type: REMOVE_RESERVATION,
        payload: reservationId
    }
}

export const createReservation = (formData) => async (dispatch) =>{
    const res = await csrfFetch(`/api/reservations`, {
        method: "POST",
        body: formData
    });
    const data = await res.json();
    dispatch(receiveReservation(data));
    return res;
}

export const fetchReservations = () => async(dispatch)=>{
    const res = await csrfFetch(`/api/reservations`)
    let data = await res.json();
    dispatch(receiveReservations(data));
    return res;
}


const reservationReducer = (state = [], action) =>{
    switch(action.type){
        case RECEIVE_RESERVATION:
            return {...state, reservation: action.payload}
        case RECEIVE_RESERVATIONS:
            return {...state, ...action.payload}
        case REMOVE_RESERVATION:
            return {...state, reservation: null}
        default:
            return state;
    }
}

export default reservationReducer;