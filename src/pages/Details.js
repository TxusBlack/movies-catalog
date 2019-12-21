import React from 'react';
import Navbar from '../components/navbar';
import '../styles/styles.css';

import {
  getMovie
} from '../redux/actions';
import { connect } from 'react-redux';
import MovieComponent from '../components/movie/movie';

class DetailsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movieId: props.match.params.movieId,
      details: null
    }
  }

  async componentDidMount() {
    await this.props.getMovie(this.state.movieId);
    this.setState({
      details: this.props.data
    });
  }

  _showContent = () => {
    const { details } = this.state;
    if (details) {
      return (
        <>
          <div className="row justify-content-md-center align-items-center" id="container-movie">
            <div className="col-md-4 col-lg-4 col-xl-4 col-12">
              <MovieComponent image={details.poster_path} title={details.title} />
            </div>
            <div className="col-md-8 col-lg-8 col-xl-8 col-12">
              <h1>{details.title}</h1>
              <h4>Synopsis:</h4>
              <p>{details.overview}</p>
            </div>
          </div>
        </>
      )
    }
  }

  render() {
    return (
      <div className="background">
        <Navbar {...this.props} />
        <div className="container pt-4 pb-4">
          {
            this._showContent()
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.movies.oneMovie
  }
};

const mapDispatchToProps = dispatch => ({
  getMovie: (movieId) => dispatch(getMovie(movieId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
