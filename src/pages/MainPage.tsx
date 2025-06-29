import React from 'react';
import styled from 'styled-components';
import mainImage from '../assets/mainimg.svg';
import star from '../assets/star.png';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types/Product';

interface MainPageProps {
  onAddToCart?: (product: Product) => void;
}

const MainPageWrapper = styled.main`
  padding: 2rem;
  font-family: 'Inter', sans-serif;
`;

const MainContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  position: relative;
  background: white;
  overflow: hidden;
  padding: 2rem;
`;

const BackgroundShape = styled.div`
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 1440px;
  height: 820px;
  background-color: rgba(245, 251, 252, 1);
  opacity: 0.87;
  transform: rotate(-30deg);
  transform-origin: left bottom;
  z-index: -1;
`;

const MainText = styled.div`
  max-width: 600px;
  padding: 2rem;
  margin-top: 2rem;
  flex: 1;
`;

const Title = styled.h1`
  white-space: nowrap;
  font-weight: 400;
  font-size: 60px;
  letter-spacing: 1.8px;
  margin-bottom: 2rem;
  z-index: 1;
`;

const HighlightText = styled.span`
  color: #33b8be;
`;

const Paragraph = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 4rem;
  letter-spacing: 0.36px;
  color: rgba(84, 98, 133, 1);
  z-index: 1;
`;

const OrderButton = styled.button`
  width: 193px;
  height: 60px;
  padding: 0.8rem 2rem;
  background-color: #33b8be;
  color: white;
  border: none;
  font-weight: bold;
  font-size: 17px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
  z-index: 1;
  margin-bottom: 2rem;
`;

const StarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const StarImage = styled.img`
  width: 110px;
  height: auto;
  margin-right: 5px;
`;

const Reviews = styled.div`
  margin-top: 10px;
`;

const Rating = styled.h1`
  font-weight: 400;
  font-size: 16px;
  color: rgba(8, 9, 10, 1);
`;

const HighlightRating = styled.span`
  color: rgba(53, 184, 190, 1);
`;

const MainImage = styled.div`
  flex: 1;
  max-width: 50%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const MainPage: React.FC<MainPageProps> = ({ onAddToCart }) => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    const testProduct: Product = {
      id: 'burger-combo',
      meal: 'Burger Combo',
      price: 9.99,
      img: '', 
    };

    if (onAddToCart) {
      onAddToCart(testProduct);
      navigate('/orders');
    } else {
      navigate('/login');
    }
  };

  return (
    <MainPageWrapper>
      <MainContent>
        <BackgroundShape />
        <MainText>
          <Title>
            Beautiful food & <br />
            takeaway, <HighlightText>delivered</HighlightText> <br />
            to your door.
          </Title>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </Paragraph>

          <OrderButton onClick={handleOrderClick}>Place an Order</OrderButton>

          <StarWrapper>
            <StarImage src={star} alt="star" />
          </StarWrapper>
          <Reviews>
            <Rating>
              <HighlightRating>4.8 out of 5</HighlightRating> based on 2000+ reviews
            </Rating>
          </Reviews>
        </MainText>

        <MainImage>
          <Image src={mainImage} alt="Delivery" />
        </MainImage>
      </MainContent>
    </MainPageWrapper>
  );
};

export default MainPage;
