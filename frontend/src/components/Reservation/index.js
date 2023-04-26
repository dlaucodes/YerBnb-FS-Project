
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
    const [days, setDays] = useState(0);
    const guestId = currentUser ? guest.id : "";
    const temp = new Date();
    const today = new Date(temp.setHours(0,0,0,0));
    const price = listing.price;

    //  useEffect(() => {
    //     setDays( Math.floor(((endDate.getTime() - (new Date(startDate.setHours(0,0,0,0))).getTime())/1000/60/60/24) < 0 ? 0 : ((endDate.getTime() - (new Date(startDate.setHours(0,0,0,0))).getTime())/1000/60/60/24)));
    // },[])
 
    // useEffect(() => {
    //     setTotal(listing.price * days + parseInt(listing.price * days * 0.12) + parseInt(listing.price * days * 0.08));
    // },[])

    console.log(startDate)
    console.log(endDate)
    console.log(guest.id)


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
        formData.append('reservation[days]', days)
        formData.append('reservation[start_date]', startDate)
        formData.append('reservation[end_date]', endDate)
        formData.append('reservation[guests]', guests)
        formData.append('reservation[listing_id]', listing.id)
        formData.append('reservation[total]', total) 

        if(currentUser){
            dispatch(createReservation(formData)).
            then( history.push(`/profiles/${currentUser.id}`))
           
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
                    {`${price}`}
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
            className="date-input"
            type="date"
            value={startDate}
            onChange={(e)=> setStartDate(e.target.value)} required
            min={today}
            />
            <input 
            className="date-input"
            type="date"
            value={endDate}
            onChange={(e)=> setEndDate(e.target.value)} required
            min={startDate}
            />
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
                    {listing.price} x nights
                    </div>
                    <div className="reservation-subtotal-right">
                        $4983084
                    </div>
                </div>
                <div className="cleaning-fee">
                    <div className="cleaning-fee-left">
                        cleaning fee 
                    </div>
                    <div className="cleaning-fee-right">
                        $1828
                    </div>
                </div>
                <div className="service-fee">
                    <div className="service-fee-left">
                        Service Fee
                    </div>
                    <div className="service-fee-right">
                        $2742
                    </div>
                    <div className="total-before-taxes">
                        <div className="total-before-taxes-left">
                            Total before taxes
                        </div>
                        <div className="total-before-taxes-right">
                            $60000
                        </div>
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