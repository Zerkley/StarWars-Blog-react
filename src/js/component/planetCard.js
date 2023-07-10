import React from "react";

export const PlanetCard = () => {
  return (
    <div className="card my-5 mx-2" style={{ width: "22rem", height: "28rem" }}>
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/free-star-341-225972.png"
        className="img-thumbnail"
        alt="..."
      ></img>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Gender: <br />
          Hair Color: <br />
          Eye Color: <br />
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
