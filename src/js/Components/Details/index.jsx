import React from 'react';
import PropTypes from 'prop-types';
import s from './details.scss';
import Rating from '../Rating';
import Genres from '../Genres';

const Details = (props) => {
  const {
    original_title, genre_ids, vote_average,
  } = props;

  return (
    <div className={s.container}>
      <h1 className={s.h1}>{original_title.toUpperCase()}</h1>
      <Genres genre_ids={genre_ids}/>
      <Rating rating={vote_average} />
    </div>
  );
};

export default Details;

Details.propTypes = {
  original_title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
};
