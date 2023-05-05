import './Confirmation.css';
import React, {useState} from "react";

function Unsuccessful({setShowUnsuccessfulModal}){
    return (
        <div className="unsuccess">
            <div className="unsuccessful">
                <div className="msg1">
                Reservation Unsuccessful

                </div>
                <div className="msg2">
                 Select Check-in/out Dates

                </div>
            </div>
            
        </div>
    )
}

export default Unsuccessful;