import { useEffect, useState } from "react";
import classes from "../style/TimeTableGrid.module.css";
import { useDrop } from "react-dnd";

export default function TableBox() {
  const [clicks, setClicks] = useState(0);

  const [faculty, setFaculty] = useState({});

  const [{ isOver }, drop] = useDrop({
    accept: "FACULTY_ITEM",
    drop: (item, monitor) => {
      setFaculty(item);
    },
  });

  useEffect(() => {
    let singleClickTimer;
    if (clicks === 1) {
      singleClickTimer = setTimeout(() => {
        setClicks(0);
      }, 250);
    } else if (clicks === 2) {
      setFaculty({});
      setClicks(0);
    }
    return () => clearTimeout(singleClickTimer);
  }, [clicks]);

  const subject = faculty?.subject?.toLowerCase();

  return (
    <td onClick={() => setClicks((prev) => prev + 1)}>
      <div ref={drop} className={`${classes.facultytime} ${classes[subject]}`}>
        <div>
          {faculty.image && (
            <img
              className={classes.facultyphoto}
              src={faculty.image}
              alt="profile"
            />
          )}
        </div>
        <div className={classes.facultyname}>{faculty.name}</div>

        <div className={classes.facultysubject}>{faculty.subject}</div>
      </div>
    </td>
  );
}
