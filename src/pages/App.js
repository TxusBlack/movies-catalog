import React from 'react';

import { connect } from 'react-redux';
import {
  getMovies
} from '../redux/actions';

class App extends React.Component {

  async componentDidMount() {
    await this.props.getMovies();
    console.log('movies', this.props.data.movies);
  }

  render() {
    return (
      <>
        <div>App.js</div>
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
  // login: (id, uid, onesignal) => dispatch(login(id, uid, onesignal))
  getMovies: () => dispatch(getMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
