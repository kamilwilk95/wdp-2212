import React from 'react';
import styles from './Promo.module.scss';
import PropTypes from 'prop-types';
import { useShowPrice } from '../../../../hooks/price-hook';

const Promo = ({ price, priceOld }) => {
  const priceToDisplay = useShowPrice(price);
  const priceOldToDisplay = useShowPrice(priceOld);
  return (
    <div className={styles.promo}>
      <h4>{priceToDisplay}</h4>
      {priceOld && <h6>{priceOldToDisplay}</h6>}
    </div>
  );
};

Promo.propTypes = {
  price: PropTypes.number,
  priceOld: PropTypes.number,
};

export default Promo;
