import React from 'react';
import { useParams } from 'react-router-dom';
import './Profile.css';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../store/user'
import { useEffect } from 'react';




const ProfileDetails = () => {
    const currentUser = useSelector((state)=> state.session.user);
    const dispatch = useDispatch();
    const { id } = useParams();

    const uploadPhoto = (e)=> {
        const file = e.currentTarget.files[0];
        const formData = new FormData();
        formData.append('user[photo]', file);
        dispatch(userActions.updateUser(formData));
    }

    return (
        <>
        <div className="profile-container">
            <div className="left-container">
                <div className="left-inner-container">
                    <div className="profile-picture-container">
                        {currentUser.photoUrl && (<img className='profile-picture' src={currentUser.photoUrl} alt="" />)}
                    </div>
                        <label id='update-photo-label' htmlFor="update-photo">Update photo</label>
                        <input type="file" id='update-photo' onChange={uploadPhoto} accept="image"/>
                    <div className="reviews-container">
                        ★ 3 reviews
                   
                    </div>  
                    <div className="verification-container">
                        <svg class="badge-icon" width="24" height="24" viewBox="0 0 32 32"><path d="M16 .798l.555.37C20.398 3.73 24.208 5 28 5h1v12.5C29 25.574 23.21 31 16 31S3 25.574 3 17.5V5h1c3.792 0 7.602-1.27 11.445-3.832L16 .798zm0 2.394l-.337.213C12.245 5.52 8.805 6.706 5.352 6.952L5 6.972V17.5c0 6.831 4.716 11.357 10.713 11.497L16 29c6.133 0 11-4.56 11-11.5V6.972l-.352-.02c-3.453-.246-6.893-1.432-10.311-3.547L16 3.192zm7 7.394L24.414 12 13.5 22.914 7.586 17 9 15.586l4.5 4.499 9.5-9.5z"></path></svg>Identity verified
                    </div>
                    <div className="divider-container"></div>
                    <div className="confirmed-container">
                        {`${currentUser.firstName}`} confirmed
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