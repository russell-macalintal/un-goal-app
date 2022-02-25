import React from "react";
import TaskCard from "./TaskCard";
import "../App.css";

export default function Calender() {
  const getTime = () => {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    const newDate = month + "/" + day + "/" + year;
    return newDate;
  };

  return (
    <div className="calendar-main-component">
      <div className="calendar-today">
        <h1>Today's Date</h1>
        <p>{getTime()}</p>
      </div>
      <div className="calendar-task-header">
        <h3>Today's Tasks</h3>
      </div>
      <div className="calendar-task-card">
        {/* map through student data then pass the result of the map into TaskCard */}
        <TaskCard />
      </div>
    </div>
  );
}
