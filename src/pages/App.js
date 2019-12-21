import React from 'react';
import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import {
  getMovies
} from '../redux/actions';

import MovieComponent from '../components/movie/movie';
import NavBar from '../components/navbar';

class App extends React.Component {

  async componentDidMount() {
    if (this.props.data.movies.length === 0) await this.props.getMovies();
  }

  _row = (movies) => {
    let arr = [], columns = [];
    if (this.props.data.isMovie) {
      movies.forEach((movie, i) => {
        if (movie.poster_path && movie.original_title) {
          columns.push(
            <div key={movie.id} className="col-md-3 col-sm-6 mb-4">
              <Link to={`/movie/${movie.id}`}>
                <MovieComponent className="col-md-3 col-sm-6 mb-4" image={movie.poster_path} title={movie.original_title} key={movie.id} />
              </Link>
            </div>
          );
        } else i-=1
        if ((i + 1) % 4 === 0) {
          arr.push(<div key={movie.id} className="row">{columns}</div>);
          columns = [];
        }
      });
    } else {
      movies[0].known_for.forEach((movie, i) => {
        if (movie.poster_path && movie.original_title) {
          columns.push(
            <div key={movie.id} className="col-md-3 col-sm-6 mb-4">
              <Link to={`/movie/${movie.id}`}>
                <MovieComponent className="col-md-3 col-sm-6 mb-4" image={movie.poster_path} title={movie.original_title} key={movie.id} />
              </Link>
            </div>
          );
        } else i-=1
        if ((i + 2) % 4 === 0) {
          arr.push(<div key={movie.id} className="row">{columns}</div>);
          columns = [];
        }
      });
    }
    return arr;
  }

  render() {
    return (
      <>
        <NavBar {...this.props} />
        <div className="container pt-4 pb-4">
          {this._row(this.props.data.movies)}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.movies,
    isMovie: state.isMovie
  }
};

const mapDispatchToProps = dispatch => ({
  getMovies: () => dispatch(getMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
