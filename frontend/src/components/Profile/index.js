import React from 'react';
import { useParams } from 'react-router-dom';
import './Profile.css';

const ProfileDetails = () => {
    const { id } = useParams();
    return (
        <>
        <div className="testing">
        Profile details - { id }
        </div> 
        </>
     );
}
 
export default ProfileDetails