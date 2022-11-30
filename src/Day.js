import React from "react";
import "./Day.css";
import AppointmentInDay from "./AppointmentInDay";

// newState = addDentist(state, "Toos", "Trekker", "06-12345678", "toos@tandartspraktijkbvt.nl")

export default ({ appointments }) => {
  const appointmentsJSX = appointments.map(
    ({ time, patient, dentist, assistant }, index) => (
      <AppointmentInDay
        time={time}
        patient={patient}
        dentist={dentist}
        assistant={assistant}
        key={index}
      />
    )
  );
  return <ul className="dayview">{appointmentsJSX}</ul>;
};
