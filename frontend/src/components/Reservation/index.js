
import { useState, useEffect } from 'react';
import { fetchListings } from '../../store/listing';
import './Reservation.css';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchUsers } from '../../store/user';
import { fetchReservations } from '../../store/reservation';


const Reservation = ()=>{
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    

    useEffect(()=>{
        fetchListings()
        fetchUsers()
        fetchReservations()
    }, [])

    return(
    <div className="reservation-container">
        hello reservation
    </div>
    )
}








export default Reservation;