import React from 'react';
import PropTypes from 'prop-types';
import './movie.css';

class MovieComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imgUrl: null
    }
  }

  static propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.setState({
      imgUrl: `https://image.tmdb.org/t/p/w500/${this.props.image}`
    })
  }

  render() {
    return(
      <div>
        <img src={this.state.imgUrl} alt={this.props.title} className="movie-component"></img>
      </div>
    )
  }
}

export default MovieComponent;
