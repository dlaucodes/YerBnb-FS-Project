import { useState } from "react";

const StarRating = ()=>{
    const [rating, setRating] = useState(5);
    const [hover, setHover] = useState(0);

    return(
        <div className= "rating">
            {[...Array(5)].map((star, i)=>{
                i+=1
                return(
                    <button id="star" type="button" key={i}
                        className={i <= (hover || rating) ? "true" : "false"}
                        onClick={()=> setRating(i)}
                        onMouseEnter={()=> setHover(i)}
                        onMouseLeave={()=> setHover(rating)}
                        >
                           <span className="star">&#9733;</span> 
                        </button>
                )
            })
            }
        </div>
    )
}

export default StarRating;