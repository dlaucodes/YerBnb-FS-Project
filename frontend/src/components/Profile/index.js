import React from 'react';
import { useParams, Link, Redirect, NavLink } from 'react-router-dom';
import './Profile.css';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../store/user';
import { useEffect, useState } from 'react';
import { fetchListings, getListings, fetchListing, deleteListing } from '../../store/listing';
import ListingEditModal from './indexListEdit';
import { fetchReviews, getReviews, deleteReview } from '../../store/review';
import { fetchReservations, deleteReservation } from '../../store/reservation';
import {fetchUsers, updateUser} from '../../store/user';
import {formatDistanceStrict} from 'date-fns';
import ReviewEditModal from './indexReviewEdit';
import homeicon from '../../assets/homeicon.jpeg';
import tripicon from '../../assets/trips.jpeg';


const ProfileDetails = () => {
    const currentUser = useSelector((state)=> state.session.user);
    const reviews = useSelector(state=>getReviews(state));
    const test = useSelector(state=> getReviews(state));
    const listings = useSelector(state => state.listing);
    const dispatch = useDispatch();
    const { id } = useParams();
    const [filteredListings, setFilteredListings] = useState([])
    const [changeListing, setChangeListing] = useState(0);
    const [changeReview, setChangeReview] = useState(0);
    const [profilePic, setProfilePic] = useState(currentUser.photoUrl)
    const [uploadedFile, setUploadedFile] = useState(null)
    const [showListingEditModal, setShowListingEditModal] = useState(false);
    const [showReviewEditModal, setShowReviewEditModal] = useState(false);
    const [currentListingId, setCurrentListingId] = useState(null)
    const [currentReviewId, setCurrentReviewId] = useState(null)
    const [currentReviewPic, setCurrentReviewPic] = useState(null)
    const [currentReviewListingId, setCurrentReviewListingId] = useState(null)
    const reviewsArray = []
    const reservations = useSelector(state=>state.reservation.reservations)
    // const filteredReservations = reservations.filter(reservation=> reservation.guestId === id)
   

    
    for(const key in reviews){
        const review = reviews[key]
        for(const object in review){
            const reviewObject = review[object]
            reviewsArray.push(reviewObject)
        }
    }


    const refresh = () => {
        window.location.reload();
    }

    useEffect(()=>{
        dispatch(fetchListings())
        dispatch(fetchReviews())
        dispatch(fetchReservations())
        dispatch(fetchUsers())
        setProfilePic(currentUser.photoUrl)
    },[listings.listing, currentUser.photoUrl]);
    
    // dispatch(deleteListing())
    // dispatch(deleteReview())
    // dispatch(deleteReservation())
    
    const handleReservationDelete = (id)=>{
        dispatch(deleteReservation(id))
    }

    const handleDelete = (id)=>{
       dispatch(deleteListing(id))
       setChangeListing(changeListing + 1);
    }

    const handleReviewDelete =(id)=>{
        dispatch(deleteReview(id))
        setChangeReview(changeReview + 1)
    }

    const uploadPhoto = async (e)=> {
        const file = e.currentTarget.files[0];
        const formData = new FormData();
        formData.append('user[photo]', file);
        await dispatch(userActions.updateUser(formData)).then(()=>{
           setProfilePic(currentUser.photoUrl);
            setTimeout(refresh, 200);
        })
        
    }

    
    const buttonMailto = (mailto) =>{
    window.open(mailto)
  }

    if (currentUser){
    return (
        <>
        <div className="profile-container">
            <div className="left-container">
                <div className="left-inner-container">
                    {currentUser.photoUrl ? (
                        <>
                    <div key={uploadedFile ? uploadedFile.name : 'default-key'}className='profile-picture-container' viewBox="0 0 125 125">
                    {<img src={profilePic} alt=""></img>}
                    </div>
                    </>
                ) : (
                    <>
                    <svg className='profile-picture-container' width={125} height={125}             viewBox="0 0  32 32" fill={'#717171'}>
                        <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z">
                        </path>
                    </svg>
                    </>
                    )}
                        <label id='update-photo-label' htmlFor="update-photo">
                            Update photo
                        </label>
                        <input type="file" id='update-photo' onChange={uploadPhoto} accept="image"/>
                            <div className="profile-reviews-container">
                                <svg viewBox="0 0 32 32" height="24px" width="24px"><path d="M14.998 1.032a2 2 0 0 0-.815.89l-3.606 7.766L1.951 10.8a2 2 0 0 0-1.728 2.24l.031.175A2 2 0 0 0 .87 14.27l6.36 5.726-1.716 8.608a2 2 0 0 0 1.57 2.352l.18.028a2 2 0 0 0 1.215-.259l7.519-4.358 7.52 4.358a2 2 0 0 0 2.734-.727l.084-.162a2 2 0 0 0 .147-1.232l-1.717-8.608 6.361-5.726a2 2 0 0 0 .148-2.825l-.125-.127a2 2 0 0 0-1.105-.518l-8.627-1.113-3.606-7.765a2 2 0 0 0-2.656-.971zm-3.07 10.499l4.07-8.766 4.07 8.766 9.72 1.252-7.206 6.489 1.938 9.723-8.523-4.94-8.522 4.94 1.939-9.723-7.207-6.489z"></path></svg> 
                                <div className="confirmed-text">
                                     {(() => {
                                    const filteredReview = reviewsArray. filter(review => review.userId ===   currentUser.id);
                                    return (
                                        <>
                                        <div className="reservation-review-count">
                                        {filteredReview.length} reviews
                                        </div>
                                        </>
                                     );
                                })()}
                                </div>
                            </div>  
                    <div className="verification-container">
                        <svg width="24" height="24" viewBox="0 0 32 32"><path d="M16 .798l.555.37C20.398 3.73 24.208 5 28 5h1v12.5C29 25.574 23.21 31 16 31S3 25.574 3 17.5V5h1c3.792 0 7.602-1.27 11.445-3.832L16 .798zm0 2.394l-.337.213C12.245 5.52 8.805 6.706 5.352 6.952L5 6.972V17.5c0 6.831 4.716 11.357 10.713 11.497L16 29c6.133 0 11-4.56 11-11.5V6.972l-.352-.02c-3.453-.246-6.893-1.432-10.311-3.547L16 3.192zm7 7.394L24.414 12 13.5 22.914 7.586 17 9 15.586l4.5 4.499 9.5-9.5z"></path></svg><div className="confirmed-text">Identity verified</div>
                    </div>
                    <div className="divider-container"></div>
                    <div className="confirmed-container">
                        {`${currentUser.firstName}`} confirmed
                    </div>
                    <div className="confirmed-list"><svg viewBox="0 0 16 16" height="16px" width="16px"><path d="M13.102 2.537L15.365 4.8l-9.443 9.443L.057 8.378 2.32 6.115l3.602 3.602z"></path></svg><div className="confirmed-text">Identity</div></div>
                      <div className="confirmed-list"><svg viewBox="0 0 16 16" height="16px" width="16px"><path d="M13.102 2.537L15.365 4.8l-9.443 9.443L.057 8.378 2.32 6.115l3.602 3.602z"></path></svg><div className="confirmed-text">Email address</div></div>
                      <div className="confirmed-list"><svg viewBox="0 0 16 16" height="16px" width="16px"><path d="M13.102 2.537L15.365 4.8l-9.443 9.443L.057 8.378 2.32 6.115l3.602 3.602z"></path></svg><div className="confirmed-text">Phone number</div>
                      </div>
                      <div className="learn-more">
                      <p>
                          <a id="learn-more"
                    onClick={()=>
                    buttonMailto('mailto: dlaucodes@gmail.com')}>
                    Learn more</a> about how confirming account info helps keep the Yerbnb community secure.
                    </p>
                    </div>
                </div>
            </div>

            <div className="right-container">
                <div className="right-inner-container">
                <div className="intro">
                    Hi, I'm {`${currentUser.firstName}`}
                </div>
                <div className="joined">
                    Joined in {`${currentUser.createdAt.substring(4,-1)}`}
                </div>
                {/* <div className="edit">
                    Edit Profile
                </div> */}
                <div className="about">
                    About
                </div>
                <div className="right-divider">
                    <div className="lives-in">
                    <svg viewBox="0 0 16 16" height="16px" width="16px"><path d="M8.602 1.147l.093.08 7.153 6.914-.696.718L14 7.745V14.5a.5.5 0 0 1-.41.492L13.5 15H10V9.5a.5.5 0 0 0-.41-.492L9.5 9h-3a.5.5 0 0 0-.492.41L6 9.5V15H2.5a.5.5 0 0 1-.492-.41L2 14.5V7.745L.847 8.86l-.696-.718 7.153-6.915a1 1 0 0 1 1.297-.08z"></path></svg>
                    <div className="lives-in-text">Lives in New York, NY</div>
                    </div>
                </div>
                <div className="reviews">
                            <div className="profile-review-header">
                                <div className="review-star">
                                    <svg viewBox="0 0 32 32" height="16px" width="16px"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" ></path></svg>
                                </div>
                            <div className="review-title">
                                Reviews
                            </div>

                            </div>
                     
                     <div>
                        {reviewsArray.map((review, i)=>{
                            <div key={i}>
                                </div>
                            if ((review.userId === currentUser.id)){
                                return(
                                    <div className="review-card">
                                        <div className="review-card-top">
                                            <div className="review-card-left">
                                                <div className="review-listing-pic">
                                                    <NavLink to={{pathname: `/listings/${review.listingId}`}}>
                                                    <img src={`${review.listingPic}` } alt=""/></NavLink>
                                                </div>
                                            </div>
                                            <div className="review-card-right">
                                                 <div className="profile-review">
                                                    {review.body}
                                                </div>
                                            </div>
                                        </div>
                                            <div className="profile-listing-ruler">
                                            </div>
                                            <div className="profile-listing-options">
                                                <div className="button-left">
                                                    <button onClick={()=>{setCurrentReviewId(review.id);
                                                        setShowReviewEditModal(review.id);
                                                        setCurrentReviewListingId(review.listingId);
                                                        setCurrentReviewPic(review.listingPic);
                                                        }}>edit
                                                    </button>
                                                </div>
                                                <div className="button-right">
                                                    <button onClick={() => {handleReviewDelete(review.id)}}>
                                                        delete
                                                    </button>
                                                </div>
                                            </div>
                                    </div>
                                
                                )
                            }
                        })}
                        
                    </div>
                          
                </div>
                <div className="right-divider"></div>
                <div className="user-trips">
                    <div className="trips-section-text">
                    <div className="home-icon">
                        <img src={tripicon}></img>
                    </div>
                        Trips
                    </div>
                    
                    {reservations && <div className="trips-info">
                        {Object.keys(reservations).map((key, i)=>{
                            const reservation = reservations[key];
                            const startDate = new Date(reservation.startDate)
                            const endDate = new Date(reservation.endDate)

                            const startMonth = startDate.getMonth() + 1;
                            const startDay = startDate.getDate() + 1;
                            const startYear = startDate.getFullYear().toString().slice(-2);
                            const formattedStart = `${startMonth}/${startDay}/${startYear}`
                            const endMonth = endDate.getUTCMonth() +1;
                            const endDay = endDate.getUTCDate();
                            const endYear = endDate.getUTCFullYear().toString().slice(-2)
                            const formattedEnd = `${endMonth}/${endDay}/${endYear}`


                            startDate.setUTCHours(0,0,0,0);
                           


                            function daysRange(){
                            return formatDistanceStrict(new Date(startDate), new Date(endDate), {unit: 'day'})
                            }

                            function totalDays(){
                            return daysRange().split(' ')[0]
                            }

                            if(reservation.guestId === currentUser.id){
                                return(

                        <div className="trips-card">
                            <div className="trips-card-top">
                                <div className="trips-card-left">
                                    <div className="trips-listing-pic">
                                        <NavLink to={{pathname: `/listings/${reservation.listingId}`}}>
                                        <img src={`${reservation.listingPic}`} alt=""/>
                                        </NavLink>    
                                    </div>
                                </div>
                                <div className="trips-card-right">
                                    <div className="trip-title">
                                        {reservation.listingTitle}
                                    </div>
                                    <div className="trip-dates">
                                       {formattedStart} - {formattedEnd}
                                    </div>
                                    <div className="trip-guest-count">
                                        {reservation.guests} guest(s)
                                    </div>
                                    <div className="profile-trip-total">
                                        <div className="trip-total-left">
                                        trip total: 

                                        </div>
                                        ${Math.floor(
                                            ((startDate && endDate ? totalDays() : 0) * (startDate && endDate ? reservation.listingPrice : 0)) + ((startDate && endDate ? reservation.listingPrice : 0) * 0.2))}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="profile-listing-ruler"></div>
                                <div className="profile-listing-option">
                                    <button onClick={()=>{handleReservationDelete(reservation.id)}}>
                                        delete
                                    </button>
                                </div>
                        </div>
                                )
                            }
                        })}

                    </div>
                        }   

                </div>
                <div className="right-divider"></div>
                <div className="user-listings">
                    <div className="listing-section-text">
                    <div className="home-icon">
                        <img src={homeicon}></img>
                    </div>
                        My Listings
                        </div>
                    {listings.listings && <div className="listing-info">
                    
                        {Object.keys(listings.listings).map((key, i) => {
                            const listing = listings.listings[key];
                            if (listing.ownerId === currentUser.id){
                                return (
                                    <div key={key}>
                                <div className="listing-card">
                                    <div className="profile-listing-top">                                
                                    <NavLink to={{pathname: `/listings/${listing.id}`}}>
                                        <img src={listing.photoUrls[0]} alt=""></img></NavLink>{listing.title}</div>
                                        
                                        <div className="profile-listing-ruler"></div>
                                    <div className="profile-listing-options">
                                        <div className="button-left">
                                            <button onClick={()=>{setCurrentListingId(listing.id);
                                            setShowListingEditModal(listing.id)
                                            }}>edit</button>
                                        </div>
                                        <div className="button-right">
                                            <button onClick={() => {handleDelete(listing.id)}}>delete</button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        );
                    }
                })}
                    
                    </div>}
                </div>
                </div>
                {showReviewEditModal && (<ReviewEditModal setShowReviewEditModal={setShowReviewEditModal} reviewId={`${currentReviewId}`} reviewPic={currentReviewPic} reviewListingId={currentReviewListingId}/>
        )}
            </div>
            
        {showListingEditModal && (<ListingEditModal setShowListingEditModal={setShowListingEditModal} listingId={`${currentListingId}`}/>
        )}
        
       
        </div>
        </>
         
     );
}
}
 
export default ProfileDetails



