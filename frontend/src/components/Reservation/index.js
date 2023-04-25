
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



const Reservation = (props)=>{
    const currentUser = useSelector(state=> state.session.user)
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const dispatch = useDispatch();
    const guest = useSelector(({session})=> session.user)
    const [showLoginModal, setShowLoginModal] = useState(false)
    
    console.log(guest.id)

    useEffect(()=>{
        fetchListings()
        fetchUsers()
        fetchReservations()
    }, [])
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('reservation[listing_pic]',);
        formData.append('reservation[guest_id]', guest.id)
        formData.append('reservation[days]',)
        formData.append('reservation[start_date]',)
        formData.append('reservation[end_date]',)
        formData.append('reservation[guests]',)
        formData.append('reservation[listing_id]',)



        if(currentUser){
            dispatch(createReservation(formData))
        }else{
            setShowLoginModal(true);
        }
    }

    return(
        <>
    <div className="reservation-container">
        <form className="reservation-form">
                hello
            <button onClick={handleSubmit}>
                submit
            </button>
        </form>
        <div>
            {showLoginModal && <LoginFormModal setShowLoginModal={setShowLoginModal}/>}
        </div>
    </div>
        </> 
    )
}


export default Reservation;