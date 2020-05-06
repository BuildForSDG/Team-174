import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Productive Farmer</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      < div class = "collapse navbar-collapse justify-content-end"
      id = "navbarSupportedContent" >
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/crops">Crops</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/animals">Animals</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
