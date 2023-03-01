import React from 'react';
import { useParams } from 'react-router-dom';
import './Profile.css';
import { useSelector } from 'react-redux';



const ProfileDetails = () => {
    const currentUser = useSelector((state)=> state.session.user);
    const { id } = useParams();

    console.log(currentUser.firstName)
    return (
        <>
        <div className="profile-container">
            <div className="left-container">
                <div className="left-inner-container">
                <div className="profile-picture">
                    profile picture
                </div>
                <div className="photo-update">
                    Update photo
                </div>
            </div>
            </div>

            <div className="right-container">
                <div className="intro">
                    Hi, I'm {`${currentUser.firstName}`}
                </div>
                <div className="joined">
                    Joined in 2023
                </div>
                <div className="edit">
                    Edit Profile
                </div>
                <div className="about">
                    About
                </div>
                <div className="reviews">
                    Reviews
                </div>
            </div>
                
        </div>

        
        </>
     );
}
 
export default ProfileDetails