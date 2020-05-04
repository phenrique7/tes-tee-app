import * as React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../icon-button/IconButton';
import Button from '../button/Button';
import CloseIcon from '../icons/Close';
import SubtractIcon from '../icons/Subtract';
import AddIcon from '../icons/Add';
import MultiplyIcon from '../icons/Multiply';
import { PRODUCT_UNIT_PRICE } from '../../utils/constants';
import EqualsIcon from '../icons/Equals';
import { theme } from '../../styles/theme';
import {
  AvailableSize,
  AvailableProductSizes,
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
  ModalRoot,
  ProductPurchaseDetails,
  ProductDetailsText,
  ActionOptions,
  PriceResult,
  ProductQuantity,
  TotalPrice,
  PurchaseOperations,
  SelectedSize,
} from './Modal.style';

export default function Modal(props) {
  const {
    showModal,
    productImage,
    productName,
    productSizes,
    closeModal,
  } = props;
  const [activeAvailableSize, setActiveAvailableSize] = React.useState(
    productSizes[0],
  );
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);

  React.useEffect(() => {
    setTotalPrice(quantity * PRODUCT_UNIT_PRICE);
  }, [quantity]);

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
                <AvailableProductSizes>
                  {productSizes.map(size => (
                    <AvailableSize
                      key={size}
                      tabIndex="0"
                      role="button"
                      active={activeAvailableSize === size}
                      onClick={() => {
                        setActiveAvailableSize(size);
                      }}
                      onKeyDown={() => {
                        setActiveAvailableSize(size);
                      }}
                    >
                      <span>{size}</span>
                    </AvailableSize>
                  ))}
                </AvailableProductSizes>
              </ProductPurchaseDetails>
              <ProductPurchaseDetails>
                <ProductDetailsText>How many?</ProductDetailsText>
                <PurchaseOperations>
                  <ActionOptions>
                    <IconButton
                      overrides={{
                        marginLeft: 0,
                        width: 25,
                        height: 25,
                        background: theme.palette.primaryLighter,
                        borderRadius: '50%',
                      }}
                      onClick={() => {
                        if (quantity > 1) {
                          setQuantity(quantity - 1);
                        }
                      }}
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
                      onClick={() => {
                        setQuantity(quantity + 1);
                      }}
                    >
                      <AddIcon />
                    </IconButton>
                  </ActionOptions>
                  <PriceResult>
                    <ProductQuantity>{quantity}</ProductQuantity>
                    <MultiplyIcon />
                    <SelectedSize>
                      <span>{activeAvailableSize}</span>
                    </SelectedSize>
                    <EqualsIcon />
                    <TotalPrice>{totalPrice}</TotalPrice>
                  </PriceResult>
                </PurchaseOperations>
              </ProductPurchaseDetails>
            </ModalBody>
            <ModalDivider />
            <ModalFooter>
              <Button
                onClick={closeModal}
                bg="primaryRegular"
                color="primaryLightest"
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
  productImage: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productSizes: PropTypes.array.isRequired,
  closeModal: PropTypes.func.isRequired,
};
