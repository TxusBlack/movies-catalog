import React from 'react';

import { connect } from 'react-redux';
import {
  getMovies
} from '../redux/actions';

import MovieComponent from '../components/movie/movie';

class App extends React.Component {

  async componentDidMount() {
    await this.props.getMovies();
    console.log('movies', this.props.data.movies);
  }

  render() {
    return (
      <>
        <div>App.js</div>
        <MovieComponent image="7XiGqZE8meUv7L4720L0tIDd7gO.jpg" title="Iron Man 3" />
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
