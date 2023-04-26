import LoginFormPage from "./components/LoginFormModal/LoginFormModal";
import { Redirect, Route, Switch } from "react-router-dom";
import SignupForm from "./components/SignUpFormModal/SignUpForm";
import NavBar from "./components/NavBar";
import ListingIndex from "./components/Listings"
import ListForm from './components/Listings/ListFormModal'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchListings, getListings } from "./store/listing";
import ListingShow from "./components/ListingShow";
import Footer from "./components/Footer";
import ProfileDetails from "./components/Profile";
// import MapContainer from "./components/Map";
import { fetchUsers } from "./store/user";
import ReviewIndex from "./components/Reviews";
import { fetchReviews } from "./store/review";
import { fetchReservations } from "./store/reservation";







function App() {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.session.user)
  const listings = useSelector(state => state.listing)
  


  useEffect(()=>{
    dispatch(fetchListings())
    dispatch(fetchUsers())
    dispatch(fetchReviews())
    dispatch(fetchReservations())
  },[])

  // if(!users || !listings || !currentUser){
  //   return (null)
  // }

  // if (listings) {
  //   console.log(Object.values(listings))
  // }


  return (
    <>
      <NavBar />
      {/* <Home /> */}
      {/* <benchMapWrapper /> */}
      
       
      {/* </div> */}
      <Switch>
        <Route exact path="/">
            <ListingIndex />
           
        </Route>
        <Route exact path="/listings/:listingId">
            <ListingShow />
        </Route>
        <Route path="/profiles/:id/">
          {currentUser ? <ProfileDetails /> : <Redirect to="/"/>}
        </Route>
      </Switch>
        
      <Footer/>
     
    </>
  );


}

export default App;
