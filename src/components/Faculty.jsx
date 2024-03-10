import React, { useRef } from "react";
import classes from "../style/Faculty.module.css";
import FacultyItem from "./FacultyItem";

const facultyDetails = [
  {
    id: "1",
    name: "ABC",
    subject: "Maths",
    className: "maths", // Assuming you have a CSS class named "maths"
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ",
  },
  {
    id: "2",
    name: "ABC",
    subject: "Science",
    className: "science", // Assuming you have a CSS class named "science"
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ",
  },
  {
    id: "3",
    name: "ABC",
    subject: "Social",
    className: "social", // Assuming you have a CSS class named "social"
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ",
  },
  {
    id: "4",
    name: "ABC",
    subject: "English",
    className: "english", // Assuming you have a CSS class named "english"
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ",
  },
  {
    id: "5",
    name: "ABC",
    subject: "Hindi",
    className: "hindi", // Assuming you have a CSS class named "hindi"
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ",
  },
];

export default function Faculty() {
  
  const facultyDetailsRef = useRef([]);
  facultyDetailsRef.current = facultyDetails;

  return (
    <div className={classes.facultyContainer}>
      <div className={classes.facultyheader}>Faculty</div>
      <div className={classes.facultyList}>
        {/* Render each faculty item with the FacultyItem component */}

        {facultyDetailsRef.current.map(
          ({ id, name, subject, className, image }) => (
            <FacultyItem
              key={id}
              id={id}
              name={name}
              subject={subject}
              className={className}
              image={image}
            />
          )
        )}
      </div>
    </div>
  );
}
