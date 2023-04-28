import csrfFetch from "./csrf";

const RECEIVE_REVIEW = "reviews/RECEIVE_REVIEW";
const RECEIVE_REVIEWS = "reviews/RECEIVE_REVIEWS";
const REMOVE_REVIEW = "review/REMOVE_REVIEW";


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

export const removeReview = (reviewId)=>{
    return {
        type: REMOVE_REVIEW,
        payload: reviewId
    }
}

export const updateReview = (formData, reviewId) => async (dispatch)=>{
    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "PATCH",
        body: formData
    });
    const data = await res.json();
    dispatch(fetchReview(data));
    return res
}

export const createReview = (formData) => async (dispatch)=>{
    const res = await csrfFetch(`/api/reviews`, {
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
    dispatch(receiveReview(data.review));
    return res;
}

export const fetchReviews = () => async (dispatch)=>{
    const res = await csrfFetch(`/api/reviews`);
    const data = await res.json();
    dispatch(receiveReviews(data));
    return res
}

export const deleteReview = (reviewId)=>async (dispatch)=>{
    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "DELETE"
    })
    dispatch(removeReview(reviewId))
}

export const getReviews = (state)=>{
    return Object.values(state.review)
}

const reviewReducer = (state = {}, action) =>{
    switch(action.type){
        case REMOVE_REVIEW:
            return {...state, review: null}
        case RECEIVE_REVIEW:
            return {...state, review: action.payload}
        case RECEIVE_REVIEWS:
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export default reviewReducer;