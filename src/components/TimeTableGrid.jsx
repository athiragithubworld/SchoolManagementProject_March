import React, { useEffect, useRef, useState } from "react";
import classes from "../style/TimeTableGrid.module.css";
import TableBox from "./TableBox";

const days = ["Time", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const timings = [
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "01:00 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
];

export default function TimeTableGrid() {
  const daysRef = useRef([]);
  daysRef.current = days;

  const timingsRef = useRef([]);
  timingsRef.current = timings;

  const lunchBreakRef = useRef();
  lunchBreakRef.current = "01:00 PM";

  return (
    <>
      <div className={classes.container}>
        <table className={classes.grid}>
          <tbody>
            <tr>
              {daysRef.current.map((day, index) => (
                <th key={index}>
                  <div className={classes.columnheading}>{day}</div>
                </th>
              ))}
            </tr>
            {timingsRef.current.map((timing, index) => (
              <tr key={index}>
                <td>
                  <div className={classes.time}>{timing}</div>
                </td>
                {lunchBreakRef.current === timing ? (
                  <td colSpan="6" style={{ paddingRight: "20px" }}>
                    <div className={classes.breaktime}> Lunch Break</div>
                  </td>
                ) : (
                  Array.from({ length: 6 }).map((_, index) => (
                    <TableBox key={index} />
                  ))
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
