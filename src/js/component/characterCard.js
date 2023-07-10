import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const CharacterCard = (props) => {
  const { store, actions } = useContext(Context);
  const [people, setPeople] = useState([]);

  return (
    <div className="card my-5 mx-2" style={{ width: "22rem", height: "28rem" }}>
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/free-star-341-225972.png"
        className="img-thumbnail"
        alt="..."
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.characterName}</h5>
        <p className="card-text">
          Gender: {props.gender} <br />
          Hair Color: {props.hairColor} <br />
          Eye Color: {props.eyeColor}
          <br />
        </p>
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

CharacterCard.propTypes = {
  gender: PropTypes.string,
  hairColor: PropTypes.string,
  eyeColor: PropTypes.string,
  characterName: PropTypes.string,
};

CharacterCard.defaultProps = {};
