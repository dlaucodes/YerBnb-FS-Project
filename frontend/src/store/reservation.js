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
    dispatch(fetchReservations())
    return res;
}

export const fetchReservations = () => async(dispatch)=>{
    const res = await csrfFetch(`/api/reservations`)
    const data = await res.json();
    dispatch(receiveReservations(data));
    return res;
}

export const deleteReservation= (reservationId) => async (dispatch)=>{
    const res = await csrfFetch(`/api/reservations/${reservationId}`, {
        method: "DELETE"
    })
    dispatch(removeReservation(reservationId));
    dispatch(fetchReservations())
}



const reservationReducer = (state = {}, action) =>{
    switch(action.type){
        case REMOVE_RESERVATION:
            let nextState = {...state}
            // return {...state, reservation: null}
            delete nextState[action.payload]
            // debugger
            return {...nextState}
        case RECEIVE_RESERVATION:
            return {...state, reservation: action.payload}
        case RECEIVE_RESERVATIONS:
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export default reservationReducer;