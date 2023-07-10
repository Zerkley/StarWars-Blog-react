import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const PlanetCard = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card mb-4 mx-2" style={{ width: "22rem", height: "28rem" }}>
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/free-star-341-225972.png"
        className="img-thumbnail mt-2"
        alt="..."
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.plaName}</h5>

        <div className="d-flex justify-content-between">
          <a href="#" className="btn btn-outline-primary">
            Learn More!
          </a>
          <a href="#" className="btn btn-outline-primary">
            <i className="fa-regular fa-heart"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

PlanetCard.propTypes = {
  plaName: PropTypes.string,
};

PlanetCard.defaultProps = {};
