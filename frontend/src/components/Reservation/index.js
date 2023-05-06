
import { useState, useEffect } from 'react';
import { fetchListings } from '../../store/listing';
import './Reservation.css';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchUsers } from '../../store/user';
import { fetchReservations, createReservation } from '../../store/reservation';
import { fetchReviews, getReviews} from "../../store/review";
import { Dispatch } from 'react';
import LoginFormModal from '../LoginFormModal';
import ConfirmationModal from './ConfirmationModal';
import UnsuccessfulModal from './UnsuccessfulModal';
import { formatDistanceStrict, formatDistance } from 'date-fns';


const Reservation = ({listing})=>{
    const currentUser = useSelector(state=> state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const guest = useSelector(({session})=> session.user);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [showUnsuccessfulModal, setShowUnsuccessfulModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [total, setTotal] = useState(0);
    const [guests, setGuests] = useState(1);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [numDays, setNumDays] = useState(0);
    const guestId = currentUser ? guest.id : "";
    const today = new Date().toISOString().split("T")[0]
    const price = listing.price;
    const maxGuests = listing.guests;
    const reviews = useSelector(state=>getReviews(state))
    const reviewsArray = []
    

    for(const key in reviews){
        const review = reviews[key]
        for(const object in review){
            const reviewObject = review[object]
                reviewsArray.push(reviewObject)
        }
    }

    useEffect(()=>{
        dispatch(fetchReviews())
    }, [])


    function daysRange() {
    return formatDistanceStrict(new Date(startDate), new Date(endDate), {unit: 'day'})
    }

    function totalDays() {
    return daysRange().split(' ')[0]
    }

    useEffect(()=>{
        fetchListings()
        fetchUsers()
        fetchReservations()
    }, [])
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('reservation[listing_pic]', listing.photoUrls[0]);
        formData.append('reservation[guest_id]', guestId)
        formData.append('reservation[start_date]', startDate)
        formData.append('reservation[end_date]', endDate)
        formData.append('reservation[guests]', guests)
        formData.append('reservation[listing_id]', listing.id) 
        formData.append('reservation[listing_price', listing.price)
        formData.append('reservation[listing_title]', listing.title)
       
        //set logic for when dates are not entered.

        

        if(!currentUser){
            setShowLoginModal(true);
        }
        else if(startDate === "" || endDate === ""){
            setShowUnsuccessfulModal(true)
            let timeout1;
            timeout1 = setTimeout(()=>{
                clearTimeout(timeout1);
                setShowUnsuccessfulModal(false)
            }, 5700)
            return
        }
        else{
            let timeout2;
            setShowConfirmationModal(true);
            timeout2 = setTimeout(()=>{
                clearTimeout(timeout2);
                dispatch(createReservation(formData)).then(
                history.push(`/profiles/${currentUser.id}`))
            },1350)

        } 
    }

    return(
        <>
    <div className="reservation-container">
        <div className="reservation-container-header">
            <div className="reservation-container-header-left">
                <div className="reservation-listing-price">
                    ${`${price}`}
                </div>
                <div className="reservation-night">
                    night
                </div>
            </div>
            <div className="reservation-container-header-right">
                <div className="listing-reservation-rating">
                    <div className="reservation-rating-star">
                        <svg viewBox="0 0 32 32" height="14px" width="14px"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" ></path></svg>
                    </div>
                    <div className="reservation-review">
                        {(() => {
                            const filteredReview = reviewsArray. filter(review => review.listingId ===   listing.id);
                            const sum = filteredReview.reduce((total, review) => total + review.    rating, 0);
                            const average = sum / filteredReview.length;
                            return (
                                <>
                                <div className="reservation-listing-rating">
                                    {isNaN(average) ? '' : average.toFixed(1)}
                                </div>
                                <div className="reservation-dot">
                                    ·
                                </div>
                                <div className="reservation-review-count">
                                <a href="#listing-reviews-top">
                                    {filteredReview.length} reviews
                                </a>
                                </div>
                                </>
                            );
                        })()}
                    </div>
                </div>
            </div>
        </div>

        <form className="reservation-form">
            <div className="reservation-date-top">
                <div className="reservation-date-container">
                    <div className="input-date-left">
                    <span className="reservation-date-span">CHECK-IN</   span>
                        <input 
                        className="date-input-start"
                        type="date"
                        value={startDate}
                        onChange={(e)=> setStartDate(e.target.value)} required
                        min={today}
                        />

                    </div>
                    <div className="input-date-right">
                        <span className="reservation-date-span">CHECK-OUT</span>
                        <input 
                        className="date-input-end"
                        type="date"
                        value={endDate}
                        onChange={(e)=> setEndDate(e.target.value)} required
                        min={startDate}
                        />
                    </div>
                </div>
            </div>
            <div className="reservation-guest-count-outer">
                <div className="reservation-guest-count">
                    <select
                        value={guests}
                        className="reservation-guest-select"
                        onChange={(e)=>(setGuests(e.target.value))}
                    >
                        <option 
                        disabled={maxGuests < 1 ? 'disabled' : ''}
                        hidden={maxGuests < 1 ? 'hidden' : ''} 
                        value="1">1 guest</option>
                        <option 
                        disabled={maxGuests < 2 ? 'disabled' : ''}
                        hidden={maxGuests < 2 ? 'hidden' : ''}

                        value="2">2 guests</option>
                        <option 
                        disabled={maxGuests < 3 ? 'disabled' : ''}
                        hidden={maxGuests < 3 ? 'hidden' : ''} 
                        value="3">3 guests</option>
                        <option 
                        disabled={maxGuests < 4 ? 'disabled' : ''}
                        hidden={maxGuests < 4 ? 'hidden' : ''} 
                        value="4">4 guests</option>
                        <option 
                        disabled={maxGuests < 5 ? 'disabled' : ''}
                        hidden={maxGuests < 5 ? 'hidden' : ''} 
                        value="5">5 guests</option>
                        <option 
                        disabled={maxGuests < 6 ? 'disabled' : ''}
                        hidden={maxGuests < 6 ? 'hidden' : ''} 
                        value="6">6 guests</option>
                        <option 
                        disabled={maxGuests < 7 ? 'disabled' : ''} 
                        hidden={maxGuests < 7 ? 'hidden' : ''}
                        value="7">7 guests</option>
                        <option 
                        disabled={maxGuests < 8 ? 'disabled' : ''} 
                        hidden={maxGuests < 8 ? 'hidden' : ''}
                        value="8">8 guests</option>
                        <option 
                        disabled={maxGuests < 9 ? 'disabled' : ''}
                        hidden={maxGuests < 9 ? 'hidden' : ''} 
                        value="9">9 guests</option>
                        <option 
                        disabled={maxGuests < 10 ? 'disabled' : ''}
                        hidden={maxGuests < 10 ? 'hidden' : ''} 
                        value="10">10 guests</option>
                        <option 
                        disabled={maxGuests < 11 ? 'disabled' : ''}
                        hidden={maxGuests < 11 ? 'hidden' : ''} 
                        value="11">11 guests</option>
                        <option 
                        disabled={maxGuests < 12 ? 'disabled' : ''}
                        hidden={maxGuests < 12 ? 'hidden' : ''} 
                        value="12">12 guests</option>

                        </select>
                </div>     
            </div>

            <button className="reserve-button" onClick={handleSubmit}>
                Reserve
            </button>
        </form>

            <div className="no-charge">
                You won't be charged yet
            </div>
            <div className="reservation-totals">
                <div className="reservation-subtotal">
                    <div className="reservation-subtotal-left">
                    ${listing.price} x {(startDate && endDate) ? totalDays() : 0} nights
                    </div>
                    <div className="reservation-subtotal-right">
                        ${(startDate && endDate ? totalDays() : 0) * (listing.price)}
                    </div>
                </div>
                <div className="cleaning-fee">
                    <div className="cleaning-fee-left">
                        Cleaning fee 
                    </div>
                    <div className="cleaning-fee-right">
                        ${Math.floor((startDate && endDate ? totalDays() : 0) * (listing.price) * 0.08 )}
                    </div>
                </div>
                <div className="service-fee">
                    <div className="service-fee-left">
                        Service Fee
                    </div>
                    <div className="service-fee-right">
                        ${Math.floor((startDate && endDate ? totalDays() : 0) * (listing.price) * 0.12 )}
                    </div>
                </div>
                <div className="total-before-taxes">
                    <div className="total-before-taxes-left">
                        Total before taxes
                    </div>
                    <div className="total-before-taxes-right">
                        ${Math.floor(
                            ((startDate && endDate ? totalDays() : 0) * (startDate && endDate ? listing.price : 0)) + ((startDate && endDate ?listing.price : 0) * 0.2))}
                    </div>
                </div>

            </div>
        <div>
            {showLoginModal && <LoginFormModal setShowLoginModal={setShowLoginModal}/>}
        </div>
        <div>
            {showConfirmationModal && <ConfirmationModal setShowConfirmationModal={setShowConfirmationModal}/>}
            {showUnsuccessfulModal && <UnsuccessfulModal setShowUnsuccessfulModal={setShowUnsuccessfulModal}/>}
        </div>
    </div>
        </> 
    )
}


export default Reservation;