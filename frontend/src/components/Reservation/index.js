
import { useState, useEffect } from 'react';
import { fetchListings } from '../../store/listing';
import './Reservation.css';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchUsers } from '../../store/user';
import { fetchReservations, createReservation } from '../../store/reservation';
import { Dispatch } from 'react';
import LoginFormModal from '../LoginFormModal';
import { formatDistanceStrict, formatDistance } from 'date-fns'



const Reservation = ({listing})=>{
    const currentUser = useSelector(state=> state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const guest = useSelector(({session})=> session.user);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [total, setTotal] = useState(0);
    const [guests, setGuests] = useState(1);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [numDays, setNumDays] = useState(0);
    const guestId = currentUser ? guest.id : "";
    const temp = new Date();
    const today = new Date(temp.setHours(0,0,0,0));
    const price = listing.price;
    const maxGuests = listing.guests;
    

    function daysRange() {
    return formatDistanceStrict(new Date(startDate), new Date(endDate), {unit: 'day'})
    }

    function totalDays() {
    return daysRange().split(' ')[0]
    }

    

    // console.log(numDays())

    //  useEffect(() => {
    //     setDays( Math.floor(((endDate.getTime() - (new Date(startDate.setHours(0,0,0,0))).getTime())/1000/60/60/24) < 0 ? 0 : ((endDate.getTime() - (new Date(startDate.setHours(0,0,0,0))).getTime())/1000/60/60/24)));
    // },[])
 
    // useEffect(() => {
    //     setTotal(listing.price * days + parseInt(listing.price * days * 0.12) + parseInt(listing.price * days * 0.08));
    // },[])

    // console.log(startDate)
    // console.log(endDate)
    // console.log(guest.id)


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

        if(currentUser){
            dispatch(createReservation(formData))
            // then( history.push(`/profiles/${currentUser.id}`))
           
        }else{
            setShowLoginModal(true);
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
                review info
            </div>
        </div>

        <form className="reservation-form">
            <div className="reservation-date-container">
            <input 
            className="date-input-start"
            type="date"
            value={startDate}
            onChange={(e)=> setStartDate(e.target.value)} required
            min={today}
            />
            <input 
            className="date-input-end"
            type="date"
            value={endDate}
            onChange={(e)=> setEndDate(e.target.value)} required
            min={startDate}
            />
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
    </div>
        </> 
    )
}


export default Reservation;