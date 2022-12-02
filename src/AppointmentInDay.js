import React from "react";

const format_time = (time) => (time < 10 ? `0${time}:00u` : `${time}:00u`);

export default function AppointmentInDay({
  time,
  patient,
  dentist,
  assistant,
}) {
  return (
    <li className="appointment">
      <div className="time">{format_time(time)}</div>
      <div className="patient">
      <b>Patient:</b> {patient.name} <br></br>
        {/* <b>Email: </b> {patient.email}
        <br></br> <b>Telefoon: </b> {`06-${patient.telNum}`} */}
      </div>
      <div className="dentist">
        <b>Tandarts:</b> {dentist.name} <br></br>
        <b>Email: </b> {dentist.email}
        <br></br> <b>Telefoon: </b> {`06-${dentist.telNum}`}
      </div>
      <div>
      <b>Assistant:</b> {assistant.name} <br></br>
      <b>Email: </b> {assistant.email}
      <br></br> <b>Telefoon: </b> {`06-${assistant.telNum}`}
      </div>
    </li>

  );
}