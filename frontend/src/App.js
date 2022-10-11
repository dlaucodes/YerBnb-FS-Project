import LoginFormPage from "./components/LoginFormPage";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignUpFormModal/SignUpForm";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        {/* <Route exact path="/">
        </Route> */}
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
