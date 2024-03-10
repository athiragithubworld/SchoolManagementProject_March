import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendar } from "react-icons/fa";
import "../style/Navbar.css";

const Calendar = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false); // Hide the calendar after selecting a date
  };

  const formatDate = (date) => {
    // Format date as desired (e.g., "MM/DD/YYYY")
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${date.getDate()} ${months[date.getMonth()]}`;
  };

  const formatDay = (date) => {
    // Format day as desired (e.g., "Monday")
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[date.getDay()];
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ position: "relative", display: "inline-block" }}>
        <FaCalendar
          className="calender-icon"
          style={{ cursor: "pointer" }}
          onClick={() => setShowCalendar(!showCalendar)}
        />
        {showCalendar && (
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 5px)", //have to do styling here based on the actual code
              left: 0,
              zIndex: 100,
            }}
          >
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              inline // Show the calendar interface without input field
            />
          </div>
        )}
      </div>
      <div className="date-day" style={{ marginLeft: "10px" }}>
        <p id="day">{formatDay(selectedDate)}</p>
        <p id="date">{formatDate(selectedDate)}</p>
      </div>
    </div>
  );
};

export default Calendar;
