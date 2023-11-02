import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Aside from "./Aside";
import Main from "./Main";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="flex flex-row text-slate-900 bg-slate-200 min-h-[297mm] w-[210mm]">
      <Aside />
      <Main />
    </div>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
