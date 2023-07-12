import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterInfo = (props) => {
  const { store, actions } = useContext(Context);
  const people = store.people;
  const { characterId } = useParams();
  useEffect(() => {
    actions.getPeople(characterId);
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
            <h1>{people.properties?.name}</h1>
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
            <p>{people.properties?.name}</p>
          </div>
          <div className="col">
            <p>Birth Year</p>
            <p>{people.properties?.birth_year}</p>
          </div>
          <div className="col">
            <p>Gender</p>
            <p>{people.properties?.gender}</p>
          </div>
          <div className="col">
            <p>Height</p>
            <p>{people.properties?.height}</p>
          </div>
          <div className="col">
            <p>Skin Colour</p>
            <p>{people.properties?.skin_color}</p>
          </div>
          <div className="col">
            <p>Eye Colour</p>
            <p>{people.properties?.eye_color}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
