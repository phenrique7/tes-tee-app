import * as React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../icon-button/IconButton';
import Button from '../button/Button';
import CloseIcon from '../icons/Close';
import CostPrice from '../cost-price/CostPrice';
import { PRODUCT_UNIT_PRICE } from '../../utils/constants';
import {
  Size,
  ProductSizes,
  ModalRoot,
  ModalBody,
  ModalContainer,
  ModalContent,
  ModalDivider,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProduct,
  ModalProductImage,
  ModalProductName,
  ProductPurchaseDetails,
  ProductDetailsText,
  ProductQuantities,
} from './Modal.style';

export default function Modal(props) {
  const {
    showModal,
    productId,
    productImage,
    productName,
    productSizes,
    closeModal,
  } = props;
  const [validAmount, setValidAmount] = React.useState(true);
  const [activeSize, setActiveSize] = React.useState(productSizes[0]);
  const [product, setProduct] = React.useState({
    id: productId,
    quantity: 1,
    size: productSizes[0],
    totalPrice: PRODUCT_UNIT_PRICE,
  });

  function handleChangePrice(productData) {
    if (productData.quantity === 0) {
      setValidAmount(false);
    } else {
      setValidAmount(true);
    }

    setProduct(prevState => ({ ...prevState, ...productData }));
  }

  function handleChangeSize(size) {
    setActiveSize(size);
    setProduct(prevState => ({ ...prevState, size }));
  }

  function addToCart() {
    if (validAmount) {
      console.log(product);
      closeModal();
    }
  }

  return showModal ? (
    <>
      <ModalRoot>
        <ModalContainer>
          <ModalContent>
            <ModalHeader>
              <ModalProduct>
                <ModalProductImage src={productImage} alt={productName} />
                <ModalProductName>{productName}</ModalProductName>
              </ModalProduct>
              <IconButton
                onClick={closeModal}
                overrides={{
                  padding: 0,
                  marginLeft: '0.5rem',
                  marginRight: 0,
                }}
              >
                <CloseIcon />
              </IconButton>
            </ModalHeader>
            <ModalBody>
              <ProductPurchaseDetails>
                <ProductDetailsText>Which size?</ProductDetailsText>
                <ProductSizes>
                  {productSizes.map(size => (
                    <Size
                      key={size}
                      tabIndex="0"
                      role="button"
                      active={activeSize === size}
                      onClick={() => {
                        handleChangeSize(size);
                      }}
                      onKeyDown={() => {
                        handleChangeSize(size);
                      }}
                    >
                      <span>{size}</span>
                    </Size>
                  ))}
                </ProductSizes>
              </ProductPurchaseDetails>
              <ProductPurchaseDetails>
                <ProductDetailsText>How many?</ProductDetailsText>
                <ProductQuantities>
                  <CostPrice
                    size={activeSize}
                    handleChange={handleChangePrice}
                  />
                </ProductQuantities>
              </ProductPurchaseDetails>
            </ModalBody>
            <ModalDivider />
            <ModalFooter>
              <Button
                onClick={addToCart}
                bg="primaryRegular"
                color="primaryLightest"
                disabled={!validAmount}
                fullWidth
              >
                Add to cart
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalContainer>
      </ModalRoot>
      <ModalOverlay />
    </>
  ) : null;
}

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  productId: PropTypes.string.isRequired,
  productImage: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productSizes: PropTypes.array.isRequired,
  closeModal: PropTypes.func.isRequired,
};
