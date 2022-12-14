import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { editProduct } from '../../../redux/productsRedux';

import styles from './ProductBoxTemplate.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import ProductRating from '../ProductRating/ProductRating';
import HotDealsHover from '../HotDeals/HotDealsHover/HotDealsHover';
import NewFurnitureHover from '../../features/NewFurniture/NewFurnitureHover/NewFurnitureHover';

const ProductBoxTemplate = ({ hotDeals, newFurniture, ...props }) => {
  const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch();

  const favoriteChangeHandler = e => {
    e.preventDefault();
    const payload = {
      id: props.id,
      isFavorite: !props.isFavorite,
    };
    dispatch(editProduct(payload));
  };

  return (
    <div
      className={styles.root}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className={styles.photo}>
        <img
          className={styles.image}
          src={`${process.env.PUBLIC_URL}/images/products/${props.image}`}
          alt={`Furniture-${props.category}`}
        />

        {props.promo && <div className={styles.sale}>{props.promo}</div>}
        {newFurniture && (
          <div
            className={
              isShown ? styles.newFurnitureButtons : styles.newFurnitureButtonsHidden
            }
          >
            <NewFurnitureHover />
          </div>
        )}
        {hotDeals && (
          <div className={isShown ? styles.hotDealsButton : styles.hotDealsHidden}>
            <HotDealsHover />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <h5>{props.name}</h5>
        <ProductRating
          id={props.id}
          stars={props.stars}
          userRating={props.userRating}
        />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant='outline'
            onClick={favoriteChangeHandler}
            className={props.isFavorite ? `${styles.favoriteActive}` : null}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          {props.priceOld && (
            <s className='my-auto mx-2'>
              <span className='text-muted'>${props.priceOld}</span>
            </s>
          )}
          <Button className={isShown ? styles.isShownPrice : undefined} variant='small'>
            $ {props.price}
          </Button>
        </div>
      </div>
    </div>
  );
};
ProductBoxTemplate.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  priceOld: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  userRating: PropTypes.number,
  category: PropTypes.string,
  image: PropTypes.node,
  isFavorite: PropTypes.bool,
  newFurniture: PropTypes.bool,
  hotDeals: PropTypes.bool,
};

export default ProductBoxTemplate;
