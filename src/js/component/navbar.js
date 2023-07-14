import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const names = store.favorites;
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <i
          className="fa-brands fa-jedi-order fa-2xl mx-5"
          style={{ color: "black" }}
        ></i>
      </Link>
      <div className="dropdown mx-5">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favourites {store.favorites.length}
        </button>
        <ul className="dropdown-menu">
          {names
            ? names.map((name) => (
                <li key={name} className="dropdown-item">
                  {name}
                  <a id="remove" onClick={() => actions.removeFavorite(name)}>
                    <i className="fa-solid fa-trash"></i>
                  </a>
                </li>
              ))
            : null}
        </ul>
      </div>
    </nav>
  );
};
