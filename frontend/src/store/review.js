import csrfFetch from "./csrf";

const RECEIVE_REVIEW = "reviews/RECEIVE_REVIEW";
const RECEIVE_REVIEWS = "reviews/RECEIVE_REVIEWS";


export const receiveReview = (review) =>{
    return {
        type: RECEIVE_REVIEW,
        payload: review
    }
};

export const receiveReviews = (reviews) =>{
    return {
        type: RECEIVE_REVIEWS,
        payload: reviews
    }
}

export const createReview = (formData) => async (dispatch)=>{
    const res = await csrfFetch("/api/reviews", {
        method: "POST",
        body: formData
    });
    const data = await res.json();
    dispatch(receiveReview(data));
    return res;
}

export const fetchReview = (reviewId)=> async (dispatch)=>{
    const res = await csrfFetch(`/api/reviews/${reviewId}`);
    const data = await res.json();
    dispatch(receiveReview(data));
    return res;
}

export const fetchReviews = () => async (dispatch)=>{
    const res = await csrfFetch(`api/reviews`);
    const data = await res.json();
    dispatch(receiveReviews(data));
    return res
}

export const getReviews = (state)=>{
    return Object.values(state.review)
}

const reviewReducer = (state = [], action) =>{
    switch(action.type){
        case RECEIVE_REVIEW:
            return {...state, review: null}
        case RECEIVE_REVIEWS:
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export default reviewReducer;