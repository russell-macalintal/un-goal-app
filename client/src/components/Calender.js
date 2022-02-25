import React from 'react'

export default function Calender() {

const getTime = () => {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    
    const newDate = month + "/" + day + "/" + year;
    return newDate
}

  return (
    <div>
        <h4>Today's Date</h4>
        <p>{getTime()}</p>
    </div>
  )
}
