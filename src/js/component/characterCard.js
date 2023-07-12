import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CharacterCard = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card mb-4 mx-2" style={{ width: "22rem", height: "28rem" }}>
      <img
        src="https://hotpotmedia.s3.us-east-2.amazonaws.com/8-Q9qPdugAkWukOu8.png"
        className="img-thumbnail mt-2"
        alt="..."
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.characterName}</h5>
        <div className="d-flex justify-content-between">
          <Link
            to={`/characterInfo/${props.uid}`}
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

CharacterCard.propTypes = {
  gender: PropTypes.string,
  hairColor: PropTypes.string,
  eyeColor: PropTypes.string,
  characterName: PropTypes.string,
};

CharacterCard.defaultProps = {};
