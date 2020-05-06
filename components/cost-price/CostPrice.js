import * as React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../icon-button/IconButton';
import { theme } from '../../styles/theme';
import SubtractIcon from '../icons/Subtract';
import AddIcon from '../icons/Add';
import MultiplyIcon from '../icons/Multiply';
import EqualsIcon from '../icons/Equals';
import { PRODUCT_UNIT_PRICE } from '../../utils/constants';
import {
  ActionOptions,
  PriceResult,
  ProductQuantity,
  ProductSize,
  TotalPrice,
} from './CostPrice.style';

export default function CostPrice(props) {
  const { units, size, handleChange } = props;
  const [quantity, setQuantity] = React.useState(units);

  React.useEffect(() => {
    const totalPrice = quantity * PRODUCT_UNIT_PRICE;
    handleChange({ quantity, totalPrice });
  }, [quantity]);

  function subtractUnit() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  function addUnit() {
    setQuantity(quantity + 1);
  }

  return (
    <>
      <ActionOptions>
        <IconButton
          overrides={{
            marginLeft: 0,
            width: 25,
            height: 25,
            background: theme.palette.primaryLighter,
            borderRadius: '50%',
          }}
          onClick={subtractUnit}
        >
          <SubtractIcon />
        </IconButton>
        <IconButton
          overrides={{
            width: 25,
            height: 25,
            background: theme.palette.primaryLighter,
            borderRadius: '50%',
          }}
          onClick={addUnit}
        >
          <AddIcon />
        </IconButton>
      </ActionOptions>
      <PriceResult>
        <ProductQuantity>{quantity}</ProductQuantity>
        <MultiplyIcon />
        <ProductSize>
          <span>{size}</span>
        </ProductSize>
        <EqualsIcon />
        <TotalPrice>{quantity * PRODUCT_UNIT_PRICE}</TotalPrice>
      </PriceResult>
    </>
  );
}

CostPrice.defaultProps = {
  units: 1,
};

CostPrice.propTypes = {
  units: PropTypes.number,
  size: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
