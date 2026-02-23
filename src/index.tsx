import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Aside from "./Aside";
import Main from "./Main";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <div className="grid grid-cols-3 gap-2 text-slate-900 bg-slate-200 min-h-[297mm] w-[210mm]">
      <Aside />
      <Main className="col-span-2" />
    </div>
  </React.StrictMode>,
);
