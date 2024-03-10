import React from "react";
import classes from "../style/MainComponent.module.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TimeTable from "./TimeTableCopy1";
import Faculty from "./FacultyCopy";
import TimeTableCopy from "./TimeTableGridCopy";
import TimeTableDashboard from "./TimeTableDashboard";

export default function MainComponent() {
  return (
    <>
      <Navbar />

      <div className={classes.maincomponentwraper}>
        <Sidebar />
        <TimeTableDashboard />
      </div>
    </>
  );
}
