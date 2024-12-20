import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Services/Reducers/index";

// Complete Redux flow:-
/*
 1.) Make Redux wrapper in index file.
 2.) What is provider
 3.) Make Store
 4.) Check Data flow in console.
 5.) Call Action on button Click
 */

//  Provider:- Jo redux ka data hoga use puri application ke ander flow karega. Redux ka data react ke ander pahuch jayega.

const store = createStore(rootReducer);
console.warn("store data", store);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
