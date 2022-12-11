import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { editProduct, getAll } from '../../../redux/productsRedux';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const ProductBox = ({
  id,
  name,
  price,
  priceOld,
  promo,
  stars,
  image,
  category,
  isFavorite,
  isCompared,
}) => {
  const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch();

  const products = useSelector(state => getAll(state));

  const favoriteChangeHandler = e => {
    e.preventDefault();
    const payload = {
      id: id,
      isFavorite: !isFavorite,
    };
    dispatch(editProduct(payload));
  };

  const getComparedProductsAmount = products =>
    products.reduce((total, product) => (product.isCompared ? total + 1 : total), 0);

  const handleAddToCompare = e => {
    e.preventDefault();

    const comparedProductNumberMoreThenFour =
      getComparedProductsAmount(products) > 3 ? true : false;

    if (!comparedProductNumberMoreThenFour) {
      const payload = {
        id: id,
        isCompared: !isCompared,
      };
      dispatch(editProduct(payload));
    }
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
          src={`${process.env.PUBLIC_URL}/images/products/${image}`}
          alt={`Furniture-${category}`}
        />
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={isShown ? styles.buttons : styles.buttonsHidden}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant='outline'
            onClick={favoriteChangeHandler}
            className={isFavorite ? `${styles.favoriteActive}` : null}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            onClick={e => handleAddToCompare(e)}
            className={isCompared ? `${styles.isCompared}` : null}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          {priceOld && (
            <s className='my-auto mx-2'>
              <span className='text-muted'>${priceOld}</span>
            </s>
          )}
          <Button className={isShown ? styles.isShownPrice : undefined} variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};
ProductBox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  priceOld: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  category: PropTypes.string,
  image: PropTypes.node,
  isFavorite: PropTypes.bool,
  isCompared: PropTypes.bool,
};

export default ProductBox;
