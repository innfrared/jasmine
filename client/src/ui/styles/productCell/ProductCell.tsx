import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../../model/productModel';
import {
  Card,
  Wrapper,
  CardImage,
  Content,
  Title,
  PriceContainer,
  Price,
  OldPrice,
  Overlay,
  OverlayIcon,
  HoverButtons,
  FindSimilar,
} from './ProductCell.styles';
import Button from '../../../ui/styles/button/Button';

interface ProductCellProps {
  product: Product;
}

const ProductCell: React.FC<ProductCellProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleProductDetailNavigation = () => {
    navigate(
      `/products/product/${encodeURIComponent(product.name)}?id=${product.id}`
    );
  };

  return (
    <Card>
      {!product.availability && (
        <Overlay>
          <OverlayIcon>Unavailable</OverlayIcon>
        </Overlay>
      )}
      <Wrapper>
        <CardImage onClick={handleProductDetailNavigation}>
          <img
            src={product.image_main || '/assets/default-product.jpg'}
            alt={product.name}
          />
          <FindSimilar>
            <Button
              variant="tertiary"
              icon={<img src="/assets/heart.svg" alt="cart" />}
            >
              Like
            </Button>
          </FindSimilar>
          <HoverButtons>
            <Button
              variant="tertiary"
              icon={<img src="/assets/plus.svg" alt="cart" />}
            >
              Find Similar
            </Button>
            <Button
              variant="tertiary"
              icon={<img src="/assets/cart.svg" alt="cart" />}
            >
              Add to Cart
            </Button>
          </HoverButtons>
        </CardImage>
        <Content>
          <Title>{product.name}</Title>
          <PriceContainer>
            {product.price_new ? (
              <>
                <Price>{product.price_new} USD</Price>
                <OldPrice>{product.price} USD</OldPrice>
              </>
            ) : (
              <Price>{product.price} USD</Price>
            )}
          </PriceContainer>
        </Content>
      </Wrapper>
    </Card>
  );
};

export default ProductCell;
