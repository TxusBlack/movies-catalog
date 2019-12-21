import React from 'react';
import '../../styles/styles.css';
import 'jquery';
import 'bootstrap/js/src/collapse.js';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Movies Catalog</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="mr-auto"></div>
          <form className="form-inline my-2 my-lg-0">
            <select className="form-control mr-2" id="select-search">
              <option selected>Title Movies</option>
              <option>Actors</option>
            </select>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="input-search"></input>
            <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>        
      </nav>
    )
  }
}

export default NavBar;
