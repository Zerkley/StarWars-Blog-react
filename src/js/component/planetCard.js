import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const PlanetCard = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card mb-4 mx-2" style={{ width: "22rem", height: "28rem" }}>
      <img
        src="https://is5-ssl.mzstatic.com/image/thumb/Purple112/v4/1f/c2/cb/1fc2cb7c-497a-8e65-c5fa-e6822ee75abf/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/256x256bb.jpg"
        className="img-thumbnail mt-2"
        alt="..."
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.plaName}</h5>

        <div className="d-flex justify-content-between">
          <Link
            to={`/planetInfo/${props.uid}`}
            className="btn btn-outline-primary"
          >
            Learn More!
          </Link>
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
