import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const people = store.people;
  useEffect(() => {
    actions.getAllPeople();
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="row flex-row flex-nowrap overflow-auto">
          <CharacterCard
            id={peopleGeneral?.uid}
            characterName={people.properties?.name}
            gender={people.properties?.gender}
            hairColor={people.properties?.hair_color}
            eyeColor={people.properties?.eye_color}
          />

          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row flex-row flex-nowrap overflow-auto">
          <PlanetCard />
          <PlanetCard />
          <PlanetCard />
          <PlanetCard />
          <PlanetCard />
          <PlanetCard />
          <PlanetCard />
          <PlanetCard />
          <PlanetCard />
        </div>
      </div>
    </div>
  );
};
