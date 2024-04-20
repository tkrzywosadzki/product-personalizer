import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0])
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name)
  const [currentPrice, setCurrentPrice] = useState(props.sizes[0].additionalPrice);

  const getPrice = () => {
    return props.basePrice + currentPrice;
  };

  const CartButton = e => {
    e.preventDefault();
    console.log('Summary');
    console.log("=============");
    console.log("Name: ", props.title);
    console.log('Price: ', getPrice());
    console.log('Size: ', currentSize);
    console.log('Color: ', currentColor);
  }

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} color={currentColor}></ProductImage>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm
          sizes={props.sizes}
          setCurrentSize={setCurrentSize}
          setCurrentPrice={setCurrentPrice}
          currentSize={currentSize}
          colors={props.colors}
          setCurrentColor={setCurrentColor}
          
          currentColor={currentColor}
          onClick={CartButton}
        ></ProductForm>
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired
};

export default Product;