
import { useState } from 'react';
import './Reservation.css';

const Reservation = ()=>{
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    

    return(
    <div className="reservation-container">
        Reservation Component
    </div>
    )
}








export default Reservation;