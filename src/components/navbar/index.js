import React from 'react';
import '../../styles/styles.css';
import 'jquery';
import 'bootstrap/js/src/collapse.js';

import {
  search,
  getMovies
} from '../../redux/actions';
import { connect } from 'react-redux';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      select: true,
      title: null
    }
  }

  doSearch = async () => {
    const { select, title } = this.state;
    const { getMovies, search } = this.props;
    if (!title) await getMovies();
    if (title) await search(title, select);
  }

  input = (event, isSelect) => {
    if (isSelect) {
      this.setState({select: parseInt(event.target.value)});
    } else {
      this.setState({title: event.target.value});
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Movies Catalog</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="mr-auto"></div>
          <div className="form-inline my-2 my-lg-0">
            <select className="form-control mr-2" id="select-search" onChange={(e) => this.input(e, true)} value={this.state.select}>
              <option value={1}>Title Movies</option>
              <option value={0}>Actors</option>
            </select>
            <input className="form-control mr-sm-2" placeholder="Search" id="input-search" onChange={(e) => this.input(e, false)}></input>
            <button className="btn btn-primary my-2 my-sm-0" onClick={() => this.doSearch()}>Search</button>
          </div>
        </div>        
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.movies
  }
};

const mapDispatchToProps = dispatch => ({
  getMovies: () => dispatch(getMovies()),
  search: (query, isMovie) => dispatch(search(query, isMovie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
