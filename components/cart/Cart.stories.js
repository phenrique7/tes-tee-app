import React from 'react';
import Cart from './Cart';
import uuid from '../../utils/uuid';

export default {
  title: 'Cart',
  component: Cart,
};

const cartProducts = [
  {
    id: uuid(),
    name: 'TES-TEE blue cotton shirt',
    image: '/assets/shirts/blue-tee.png',
    quantity: 1,
    size: 'XS',
  },
  {
    id: uuid(),
    name: 'TES-TEE white cotton shirt',
    image: '/assets/shirts/white-tee.png',
    quantity: 3,
    size: 'M',
  },
  {
    id: uuid(),
    name: 'TES-TEE blue cotton shirt',
    image: '/assets/shirts/blue-tee.png',
    quantity: 2,
    size: 'XXL',
  },
  {
    id: uuid(),
    name: 'TES-TEE orange cotton shirt',
    image: '/assets/shirts/orange-tee.png',
    quantity: 1,
    size: 'XL',
  },
  {
    id: uuid(),
    name: 'TES-TEE yellow cotton shirt',
    image: '/assets/shirts/yellow-tee.png',
    quantity: 5,
    size: 'L',
  },
];

export const empty = () => (
  <Cart items={[]} updateItem={() => {}} removeItem={() => {}} />
);

export const items = () => {
  const [cartItems, setCarItems] = React.useState(
    cartProducts.slice(0, cartProducts.length - 2),
  );

  function updateItem(id, data) {
    setCarItems(prevState => {
      return prevState.map(item => {
        if (item.id === id) {
          return { ...item, ...data };
        }
        return item;
      });
    });
  }

  function removeItem(id) {
    setCarItems(prevState => prevState.filter(item => item.id !== id));
  }

  return (
    <Cart
      items={cartItems}
      updateItem={updateItem}
      removeItem={removeItem}
    />
  );
};

export const overflowItems = () => {
  const [cartItems, setCarItems] = React.useState(cartProducts);

  function updateItem(id, data) {
    setCarItems(prevState => {
      return prevState.map(item => {
        if (item.id === id) {
          return { ...item, ...data };
        }
        return item;
      });
    });
  }

  function removeItem(id) {
    setCarItems(prevState => prevState.filter(item => item.id !== id));
  }

  return (
    <Cart
      items={cartItems}
      updateItem={updateItem}
      removeItem={removeItem}
    />
  );
};
