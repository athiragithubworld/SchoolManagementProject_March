import React from "react";
import classes from "../style/TimeTableDashboard.module.css";
import TimeTableButtons from "./TimeTableButtons";
import Faculty from "./Faculty";
import TimeTableGrid from "./TimeTableGrid";


export default function TimeTableDashboard() {
  return (
    <div className={classes.tablegrid}>
      <TimeTableButtons />
      <TimeTableGrid />
      <Faculty />
    </div>
  );
}
 