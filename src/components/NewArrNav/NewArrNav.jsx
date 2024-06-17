import React, { useState } from "react";
import newArr from "../../routes/newArr";
import { Link } from "react-router-dom";
import "./NewArrNav.scss";

const NewArrNav = () => {
  const [activeBut, setActiveBut] = useState(null);

  const handleButtonClick = (id) => {
    setActiveBut(id);
  };

  return (
    <nav className="nav">
      <div className="nav__entering">
        <h1>New Arrivals</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis <br /> ultrices sollicitudin aliquam sem. Scelerisque duis
          ultrices sollicitudin
        </p>
      </div>
      <ul className="nav__navButtons">
        {newArr.map((nav) => (
          <li key={nav.id}>
            <Link
              className={`nav__navButtons-button ${activeBut === nav.id ? 'active' : ''}`}
              to={nav.link}
              onClick={() => handleButtonClick(nav.id)}
              style={{ textDecoration: 'none' }}
            >
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NewArrNav;
