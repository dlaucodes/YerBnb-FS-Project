import LoginFormPage from "./components/LoginFormModal/LoginFormModal";
import { Route, Switch } from "react-router-dom";
import SignupForm from "./components/SignUpFormModal/SignUpForm";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner/Banner";

import ListingIndex from "./components/ListForm";



function App() {
  return (
    <>

      <NavBar />
      <Banner/>
      {/* <ListingIndex /> */}
      <Switch>
        {/* <Route exact path="/">
        </Route> */}
        {/* <Route path="/login">
          <SignupFormPage />
        </Route> */}
        {/* <Route path="/signup">
          <SignupForm />
        </Route> */}
      </Switch>
    </>
  );


}

export default App;
