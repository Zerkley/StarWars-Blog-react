import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const people = store.people;
  const peopleGeneral = store.peopleGeneral;
  const planets = store.planets;
  const planetsGeneral = store.planetsGeneral;
  useEffect(() => {
    actions.getAllPeople();
    actions.getAllPlanets();
  }, []);
  return (
    <div>
      <h1 className="ms-3">Characters</h1>
      <div className="container-fluid">
        <div className="row flex-row flex-nowrap overflow-auto">
          {peopleGeneral.map((charName) => (
            <CharacterCard characterName={charName.name} key={charName.uid} />
          ))}
        </div>
      </div>
      <hr />
      <h1 className="ms-3">Planets</h1>
      <div className="container-fluid">
        <div className="row flex-row flex-nowrap overflow-auto">
          {planetsGeneral.map((planetName) => (
            <PlanetCard plaName={planetName.name} key={planetName.uid} />
          ))}
        </div>
      </div>
    </div>
  );
};
