import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import CloseIcon from '../icons/Close';
import IconButton from '../icon-button/IconButton';
import CartIcon from '../icons/Cart';
import { SHIPPING_PRICE } from '../../utils/constants';
import CostPrice from '../cost-price/CostPrice';
import {
  CartBody,
  CartDivider,
  CartEmptyButton,
  CartEmptyText,
  CartFooter,
  CartHeader,
  CartHeaderText,
  CartRoot,
  CartTotal,
  CartTotals,
  CartGrandTotal,
  CartItems,
  Item,
  ItemImage,
  ItemName,
  ItemCostPrice,
} from './Cart.style';

export default function Cart({ items, updateItem, removeItem }) {
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const totalSum = items.reduce(
      (accumulator, currentItem) => accumulator + currentItem.totalPrice,
      0,
    );
    setTotal(totalSum);
  }, [items]);

  function handleChangeItem(id, item) {
    if (item.quantity === 0) {
      removeItem(id);
    } else {
      updateItem(id, item);
    }
  }

  const emptyCart = items.length === 0;
  const grandTotal = total + SHIPPING_PRICE;

  return (
    <CartRoot>
      <CartHeader>
        <div>
          <CartIcon />
          <CartHeaderText>My cart</CartHeaderText>
        </div>
        <IconButton
          onClick={() => {}}
          overrides={{ margin: 0, padding: 0 }}
        >
          <CloseIcon />
        </IconButton>
      </CartHeader>
      <CartBody emptyCart={emptyCart}>
        {emptyCart ? (
          <CartEmptyText>You cart is empty.</CartEmptyText>
        ) : (
          <>
            <CartItems>
              {items.map(item => (
                <Item key={item.id}>
                  <ItemImage src={item.image} alt={item.name} />
                  <div>
                    <ItemName>{item.name}</ItemName>
                    <ItemCostPrice>
                      <CostPrice
                        units={item.quantity}
                        size={item.size}
                        handleChange={newItemData => {
                          handleChangeItem(item.id, newItemData);
                        }}
                      />
                    </ItemCostPrice>
                  </div>
                </Item>
              ))}
            </CartItems>
            <CartEmptyButton>
              <Button color="primaryLight" outlined fullWidth>
                Empty cart
              </Button>
            </CartEmptyButton>
            <CartDivider />
            <CartTotals>
              <CartTotal>{`Shipping — $${SHIPPING_PRICE}`}</CartTotal>
              <CartTotal>{`Shirts — $${total}`}</CartTotal>
              <CartGrandTotal>{`Grand total — $${grandTotal}`}</CartGrandTotal>
            </CartTotals>
            <CartDivider />
          </>
        )}
      </CartBody>
      <CartFooter>
        <Button
          bg="primaryRegular"
          color="primaryLightest"
          disabled={emptyCart}
          fullWidth
        >
          Proceed to checkout
        </Button>
      </CartFooter>
    </CartRoot>
  );
}

Cart.propTypes = {
  items: PropTypes.array.isRequired,
  updateItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};
