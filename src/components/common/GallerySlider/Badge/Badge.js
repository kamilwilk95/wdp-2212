import React from 'react';
import styles from './Badge.module.scss';
import PropTypes from 'prop-types';
import ProductRating from '../../ProductRating/ProductRating';

const Badge = ({ name, id, stars, userRating }) => {
  return (
    <div className={styles.badge}>
      <h5>{`${name}`}</h5>
      <div>
        <ProductRating id={id} stars={stars} userRating={userRating} />
      </div>
    </div>
  );
};

Badge.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  userRating: PropTypes.number,
  stars: PropTypes.number,
};

export default Badge;
