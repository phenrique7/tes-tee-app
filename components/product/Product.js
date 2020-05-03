import * as React from 'react';
import PropTypes from 'prop-types';
import {
  ProductImage,
  ProductName,
  ProductRoot,
  ProductSizes,
  Size,
} from './Product.style';

export default function Product(props) {
  const { children, name, image, sizes } = props;

  return (
    <ProductRoot>
      <ProductImage src={image} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductSizes>
        {sizes.map(size => (
          <Size key={size}>
            <span>{size}</span>
          </Size>
        ))}
      </ProductSizes>
      {children}
    </ProductRoot>
  );
}

Product.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
};
