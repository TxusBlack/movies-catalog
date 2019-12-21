import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/styles.css';

class MovieComponent extends React.Component {

  static propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

  render() {
    const { image, title } = this.props;
    return(
      <div>
        <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt={title} className="img-fluid movie-component"></img>
      </div>
    )
  }
}

export default MovieComponent;
