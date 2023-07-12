const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      peopleGeneral: [],
      people: [],
      planets: [],
      planetsGeneral: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      getAllPeople: () => {
        fetch("https://www.swapi.tech/api/people")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setStore({ peopleGeneral: data.results });
          })
          .catch((err) => console.error(err));
      },
      getPeople: (id) => {
        fetch("https://www.swapi.tech/api/people/" + id)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setStore({ people: data.result });
          })
          .catch((err) => console.error(err));
      },
      getAllPlanets: () => {
        fetch("https://www.swapi.tech/api/planets")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setStore({ planetsGeneral: data.results });
          })
          .catch((err) => console.error(err));
      },
      getPlanets: (id) => {
        fetch("https://www.swapi.tech/api/planets/" + id)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setStore({ planets: data.result });
          })
          .catch((err) => console.error(err));
      },
    },
  };
};

export default getState;
