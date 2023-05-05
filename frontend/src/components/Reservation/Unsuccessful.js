import './Confirmation.css';
import React, {useState} from "react";

function Unsuccessful({setShowUnsuccessfulModal}){
    return (
        <div className="success">
            <div>
            Reservation Unsuccessful!
            Please Select Start and End Dates!
            </div>
        </div>
    )
}

export default Unsuccessful;