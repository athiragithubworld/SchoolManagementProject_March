import React from "react";
import { useDrag } from "react-dnd";
import classes from "../style/Faculty.module.css";

export default function FacultyItem({ id, name, subject, className, image }) {
  const [{ isDragging }, drag] = useDrag({
    type: "FACULTY_ITEM",
    item: { id, name, subject, className, image },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`${classes.facultydetails} ${classes[className]}`}
    >
      <div>
        <img className={classes.facultyphoto} src={image} alt={name} />
      </div>
      <div>
        <div className={classes.facultyname}>{name}</div>
        <div className={classes.facultysubject}>{subject}</div>
      </div>
    </div>
  );
}
