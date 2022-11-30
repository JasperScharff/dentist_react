import React from "react";


const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

export default ({ time, patient, dentist, assistant }) => (
  <li className="appointment">
    <div className="time">{format_time(time)}</div>
    <div className="patient">Patiënt: {patient}</div>
    <div className="dentist">
      Tandarts: {dentist} <br>
      </br> `Email: ${ ${denistName.surname}@${randomEmailProvider.mail}}  <br>
      </br> Telefoon: {dentist.telefoon}
      </div>
    <div className="assistant">Assistent: {assistant}</div>
  </li>
);