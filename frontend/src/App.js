import LoginFormPage from "./components/LoginFormModal/LoginFormModal";
import { Route, Switch } from "react-router-dom";
import SignupForm from "./components/SignUpFormModal/SignUpForm";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner/Banner";
import ListingIndex from "./components/Listings"
import ListForm from './components/Listings/ListFormModal'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchListings, getListings } from "./store/listing";
import ListingShow from "./components/ListingShow";
import Footer from "./components/Footer";




function App() {
  const dispatch = useDispatch()
  const listings = useSelector(state => state.listing)

  useEffect(()=>{
    dispatch(fetchListings())
  },[])

  if (listings) {
    console.log(Object.values(listings))
  }

  return (
    <>
      <NavBar />
      {/* <Banner /> */}
       
      {/* </div> */}
      <Switch>
        <Route exact path="/">
            <ListingIndex />
        </Route>
        <Route path="/listings">
            <ListingShow/>
        </Route>
        {/* <Route path="/signup">
          <SignupForm />
        </Route> */}
      </Switch>
      <Footer/>
     
    </>
  );


}

export default App;
