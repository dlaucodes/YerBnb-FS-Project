import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from './context/modal';
import configureStore from "./store";
import csrfFetch from "./store/csrf";
import * as sessionActions from "./store/session";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;
}

function Root() {
  return (
    <ModalProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    </ModalProvider>
  );
}
//react18
// const renderApplication = () => {
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(
//     <React.StrictMode>
//       <Root />
//     </React.StrictMode>
//   );
// };

const renderApplication = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

if (
  sessionStorage.getItem("currentUser") === null ||
  sessionStorage.getItem("X-CSRF-Token") === null
) {
  store.dispatch(sessionActions.restoreSession()).then(renderApplication);
} else {
  renderApplication();
}
