import React from 'react';
import { connect } from 'react-redux';
import Poster from '../../Components/Poster';
import Descriptions from '../../Components/Descriptions';

const MovieDetailsPage = (props) => {
  const { movie } = props;
  return (
    <React.Fragment>
      <Poster pict={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
      <Descriptions {...movie} />
    </React.Fragment>
  );
};

export default connect(
  state => ({
    movie: state.movie,
  }),
)(MovieDetailsPage);
