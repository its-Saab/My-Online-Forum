import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";


TimeAgo.addDefaultLocale(en)

ReactDOM.render(<App />, document.getElementById("root"));
