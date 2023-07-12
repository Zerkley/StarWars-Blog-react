import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetInfo = (props) => {
  const { store, actions } = useContext(Context);
  const planet = store.planets;
  const { planetId } = useParams();
  useEffect(() => {
    actions.getPlanets(planetId);
  }, []);
  return (
    <div>
      <div className="container-fluid row">
        <div className="row flex-row">
          <div className="col">
            <img
              src="https://picsum.photos/400/200"
              className="img-thumbnail ms-4 mt-4"
              alt="..."
            ></img>
          </div>
          <div className="col">
            <h1>{planet.properties?.name}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque purus diam, pharetra at ante pellentesque,
              scelerisque vehicula lectus. Aliquam consectetur non risus in
              dignissim. Pellentesque habitant morbi tristique senectus et netus
              et malesuada fames ac turpis egestas. Cras nec mauris tempor,
              sollicitudin arcu at, ultrices lectus. Nam faucibus purus varius
              ante pretium congue. Vestibulum suscipit, mi vel euismod placerat,
              sapien tellus accumsan massa, at porttitor metus sapien quis
              velit. Vestibulum lectus odio, elementum et lorem cursus,
              fermentum lobortis risus. Aliquam pulvinar magna sit amet ornare
              eleifend. Nullam sodales dolor volutpat, malesuada velit a,
              fermentum nibh. In lacinia odio at tortor commodo suscipit.{" "}
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <p>Name</p>
            <p>{planet.properties?.name}</p>
          </div>
          <div className="col">
            <p>Climate</p>
            <p>{planet.properties?.climate}</p>
          </div>
          <div className="col">
            <p>Population</p>
            <p>{planet.properties?.population}</p>
          </div>
          <div className="col">
            <p>Orbital Period</p>
            <p>{planet.properties?.orbital_period}</p>
          </div>
          <div className="col">
            <p>Rotation Period</p>
            <p>{planet.properties?.rotation_period}</p>
          </div>
          <div className="col">
            <p>Diameter</p>
            <p>{planet.properties?.diameter}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
