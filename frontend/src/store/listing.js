import csrfFetch from "./csrf";

const RECEIVE_LISTING = "listings/RECEIVE_LISTING";
const REMOVE_LISTING = "listings/REMOVE_LISTING";

export const receiveListing = (listing) => {
    return {
        type: RECEIVE_LISTING,
        payload: listing,
    }
};

export const removeListing = ()=>{
    return {
        type: REMOVE_LISTING
    }
}

const storeCSRFToken = (res) => {
  const csrfToken = res.headers.get("X-CSRF-Token");
  if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
};

export const getListing= (listing) => async (dispatch)=>{
    const res = await csrfFetch("api/listing",{
        method: "GET",
    })

    let data = await res.json();
  dispatch(receiveListing(data.listing));
  return res;
};


const listingReducer = (state = {}, action) => {
    switch(action.type){
        case REMOVE_LISTING:
            return {...state, listing: null}
        case RECEIVE_LISTING:
            return {...state, listing: action.payload}
        default:
            return state;
    }
}

export default listingReducer;