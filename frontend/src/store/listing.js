import csrfFetch from "./csrf";

const RECEIVE_LISTING = "listings/RECEIVE_LISTING";
const REMOVE_LISTING = "listings/REMOVE_LISTING";
const RECEIVE_LISTINGS = "listings/RECEIVE_LISTINGS";



export const receiveListing = (listing) => {
    return {
        type: RECEIVE_LISTING,
        payload: listing
    }
};

export const receiveListings = (listings) => {
    return {
        type: RECEIVE_LISTINGS,
        payload: listings
    }
};

export const createListing = (formData) => async (dispatch) => {
    const res = await csrfFetch("/api/listings", {
        method: "POST",
        body: formData
    });
    const data = await res.json();
    dispatch(receiveListing(data));
    return res;
}

export const removeListing = (listingId)=>{
    return {
        type: REMOVE_LISTING,
        payload: listingId
    }
}

export const getListings = (state) => { return Object.values(state.listing)}

export const getListing = (listingId) => {
    return (
        (store)=>{
        return store.listings[listingId]
    })
}


export const fetchListing = (listingId) => async (dispatch)=>{
    const res = await csrfFetch(`/api/listing/${listingId}`)

    let data = await res.json();
  dispatch(receiveListing(data));
  return res;
};

export const fetchListings = () => async (dispatch)=>{
    const res = await csrfFetch(`/api/listings`)

    let data = await res.json();
  dispatch(receiveListings(data));
  return res;
};

export const deleteListing = (listingId) => async (dispatch)=>{
    const res = await csrfFetch(`/api/listings/${listingId}`, {
        method: "DELETE"
    })
  dispatch(removeListing(listingId));
};


const listingReducer = (state = [], action) => {
    let newState = {...state}
    switch(action.type){
        case REMOVE_LISTING:
            return {...state, listing: null}
        case RECEIVE_LISTING:
            return {...state, listing: action.payload}
        
            // return {...state, ...action.payload}
            // return {...state, action.payload}
        case RECEIVE_LISTINGS:
            return {...state, ...action.payload}
            // return {...state, ...action.payload}
        default:
            return state;
    }
}

export default listingReducer;