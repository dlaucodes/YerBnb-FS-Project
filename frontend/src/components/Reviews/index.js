import "./Review.css"
import React from "react";
import { useParams, Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { useEffect, useState } from "react";
import { fetchReviews } from "../../store/review";
import ListingShow from "../ListingShow";
import csrfFetch from "../../store/csrf";

const ReviewIndex = ()=>{
    const [list, setList] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const res = csrfFetch('/api/reviews').then(res => {
            return res.json();
        }).then(data => {
            setList((oldData) => ({...oldData, ...data}));
        });
    }, []);

    useEffect(()=>{
        dispatch(fetchReviews())
    }, [])

    
    if(list){
        let array = Object.values(list)
        let reviews = Object.values(array)
        const reviewsArray = Object.values(reviews[0])
        console.log(reviewsArray, "hello")
    
        return (
            <>
            <div className="reviews-container">
                {reviewsArray.map((review, i)=>
                    <div key={i}>
                        <ListingShow review={review}/>                        
                    </div>
                )}
            </div>
            </>
        );
    }else{
        return <div> loading...</div>
    }
};

export default ReviewIndex;