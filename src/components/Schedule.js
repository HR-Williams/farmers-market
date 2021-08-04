import React from "react";
import PropTypes from "prop-types";

function Schedule(props) {
  return (
    <React.Fragment>
      <h3>{props.day}</h3>
      <p><b>{props.location}</b></p>
      <br />
      <p><em>{props.hours}</em></p>
      <br />
      <p>{props.booth}</p>
      <hr />
    </React.Fragment>
  )
}

Schedule.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Schedule;