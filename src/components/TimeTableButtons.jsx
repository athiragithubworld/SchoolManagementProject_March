import React from "react";
import classes from "../style/TimeTableButton.module.css";
import { HiPencil } from "react-icons/hi";
import { FiShare2 } from "react-icons/fi";

export default function TimeTableButtons() {
  return (
    <div className={classes.buttoncontainer}>
      {/*  */}
      <span>
        <select className={classes.timetable_classbutton} id="class">
          <option value="">Class </option>
          <option value="class1">Class 1</option>
          <option value="class2">Class 1</option>
          <option value="class3">Class 1</option>
        </select>

        <span>
          <select className={classes.timetable_classbutton} id="section">
            <option value="section">Section </option>
            <option value="section1">Section 1</option>
            <option value="section2">Section 2</option>
            <option value="section3">Section 3</option>
          </select>
        </span>
      </span>
      {/* ------- */}
      <span>
        <button className={classes.faculty_classbutton}>
          <HiPencil />
        </button>

        <span>
          <button className={classes.faculty_sharebutton}>
            {" "}
            Share <FiShare2 />{" "}
          </button>
        </span>
      </span>
    </div>
  );
}
