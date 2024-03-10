import React, { useState } from 'react'
import { useDrop } from "react-dnd";
import classes from "../style/TimeTableGrid.module.css";




export default function TimeTableGridCopy2() {
  const [facultyList, setFacultyList] = useState([{}]); //array to store faculty data

  const [{ isOver }, drop] = useDrop({
    accept: "FACULTY_ITEM",
    drop: (item, monitor) => {
      debugger;
      console.log("item", drop);
      const dropTargetOffset = monitor.getClientOffset();
      if (dropTargetOffset) {
        const row = Math.floor((dropTargetOffset.y - window.scrollY) / 50); // Assuming each row has a height of 50px
        const column = Math.floor((dropTargetOffset.x - window.scrollX) / 100); // Assuming each column has a width of 100px

        // Handle the placement of the dropped faculty item at the calculated row and column
        console.log(
          `Dropped item '${item.name}' at row ${row}, column ${column}`
        );

        // You can further update your state or perform any necessary action to reflect the placement
        setFacultyList((prevList) => [...prevList, item]);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  console.log("List", facultyList);

  return (
    <>
      <div className={classes.container}>
        {/* <table>
          <tbody>
            <tr>
              <th>
                <div className={classes.columnheading}>Time</div>
              </th>
            </tr>
            <tr>
              <td>
                <div className={classes.time}>9:30 AM</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={classes.time}>10:00 AM</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={classes.time}>10:30 AM</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={classes.time}>11:00 AM</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={classes.time}>11:30 AM</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={classes.time}>01:00 PM </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={classes.time}>02:00 PM</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={classes.time}>02:30 PM</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={classes.time}>03:00 PM</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={classes.time}>03:30 PM</div>
              </td>
            </tr>
          </tbody>
        </table> */}
        <table
          ref={drop}
          className={classes.grid}
          style={{ background: isOver ? "lightgray" : "white" }}
        >
          <tbody>
            <tr>
              <th>
                <div className={classes.columnheading}>MON</div>
              </th>
              <th>
                <div className={classes.columnheading}>TUE</div>
              </th>
              <th>
                <div className={classes.columnheading}>WED</div>
              </th>
              <th>
                <div className={classes.columnheading}>THU</div>
              </th>
              <th>
                <div className={classes.columnheading}>FRI</div>
              </th>
              <th>
                <div className={classes.columnheading}>SAT</div>
              </th>
            </tr>

            <tr>
              <td>
                {facultyList.map((faculty) => {
                  return (
                    <div className={`${classes.facultytime} ${classes.maths}`}>
                      <div>
                        {/* <img
                    className={classes.facultyphoto}
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ"
                    alt="profile"
                  /> */}
                      </div>
                      <div className={classes.facultyname}>{faculty.name}</div>

                      <div className={classes.facultysubject}>
                        {faculty.subject}
                      </div>
                    </div>
                  );
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
