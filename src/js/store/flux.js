const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      peopleGeneral: [],
      people: [],
      planets: [],
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
      getPlanets: () => {
        fetch("https://www.swapi.tech/api/planets/1")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setStore({ planets: data.results });
          })
          .catch((err) => console.error(err));
      },
    },
  };
};

export default getState;
