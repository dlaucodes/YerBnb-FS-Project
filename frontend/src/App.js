import LoginFormPage from "./components/LoginFormModal/LoginForm";
import { Route, Switch } from "react-router-dom";
import SignupForm from "./components/SignUpFormModal/SignUpForm";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
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
