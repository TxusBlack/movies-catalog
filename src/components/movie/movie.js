import React from 'react';
import PropTypes from 'prop-types';
import './movie.css';

class MovieComponent extends React.Component {

  static propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

  render() {
    const { image } = this.props;
    return(
      <div>
        <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt={this.props.title} className="movie-component"></img>
      </div>
    )
  }
}

export default MovieComponent;
