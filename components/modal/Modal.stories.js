import React from 'react';
import Button from '../button/Button';
import Modal from './Modal';

export default {
  title: 'Modal',
  component: Modal,
};

export const standard = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Open modal</Button>
      <Modal
        showModal={showModal}
        productImage="/assets/shirts/blue-tee.png"
        productName="TES-TEE blue cotton shirt"
        productSizes={['XS', 'L', 'XL']}
        closeModal={() => setShowModal(false)}
      />
    </>
  );
};

export const content = () => (
  <Modal
    showModal
    productImage="/assets/shirts/blue-tee.png"
    productName="TES-TEE blue cotton shirt"
    productSizes={['XS', 'L', 'XL']}
    closeModal={() => {}}
  />
);
