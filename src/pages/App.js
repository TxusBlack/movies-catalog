import React from 'react';

import { connect } from 'react-redux';
import {
  getMovies
} from '../redux/actions';

import MovieComponent from '../components/movie/movie';
import NavBar from '../components/navbar';

class App extends React.Component {

  async componentDidMount() {
    await this.props.getMovies();
    console.log('movies', this.props.data.movies);
  }

  row = (movies) => {
    let arr = [], columns = [];
    movies.forEach((movie, i) => {
      columns.push(
        <div key={i} className="col-md-3 col-sm-6 mb-3">
          <MovieComponent className="col-md-3 col-sm-6 mb-3" image={movie.poster_path} title={movie.original_title} key={movie.id} />
        </div>
      );
      if ((i + 1) % 4 === 0) {
        arr.push(<div key={i} className="row">{columns}</div>);
        columns = [];
      }
    });
    return arr;
  }

  render() {
    return (
      <>
        <NavBar />
        <div className="container pt-3 pb-3">
          {this.row(this.props.data.movies)}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.movies
  }
};

const mapDispatchToProps = dispatch => ({
  getMovies: () => dispatch(getMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
