import React from "react";
import "../about.css";
import { Link, Outlet } from "react-router-dom"
function About() {
  return (
    <div>
    <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
</nav>
<Outlet />
    <div className="container">

      <h1 className="header">About Pokémon App</h1>
      <p className="text">
        This is an app that allows you to search for information about your favorite Pokémon.
      </p>
      <h2 className="subheader">Our Mission</h2>
      <p className="text">
        Our mission is to provide the most comprehensive and up-to-date information about all the Pokémon in the world.
      </p>
      </div>
      </div>
   
  );
}

export default About;
