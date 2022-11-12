import React, { useState } from 'react';
import styled from 'styled-components';
import CardInfo from './CardInfo';
import starIcon from '../assets/images/icon-star.svg';
import ThankYou from './ThankYou';

const Card = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rating, setRating] = useState();

  return (
    <CardContainer>
      {!isSubmitted ? (
        <Wrapper>
          <Header>
            <Image src={starIcon} />
          </Header>
          <CardInfo
            title='How did we do?'
            desc='Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!'
            submit='Submit'
            isSubmitted={isSubmitted}
            setIsSubmitted={setIsSubmitted}
            setRating={setRating}
          />
        </Wrapper>
      ) : (
        <Wrapper>
          <ThankYou
            title='Thank you!'
            desc='We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!'
            isSubmitted={isSubmitted}
            rating={rating}
          />
        </Wrapper>
      )}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
`;

const Wrapper = styled.div`
  width: 412px;
  height: 416px;
  border-radius: 30px;
  background: radial-gradient(
    98.96% 98.96% at 50% 0%,
    #232a34 0%,
    #181e27 100%
  );
  display: flex;
  flex-direction: column;
  padding: 32px 32px 0 32px;

  @media screen and (max-width: 375px) {
    width: 327px;
    height: 360px;
    border-radius: 15px;
    padding: 24px 24px 0 24px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 32px 0 0 32px; */
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--dark-blue);

  @media screen and (max-width: 375px) {
    width: 40px;
    height: 40px;
  }
`;

const Image = styled.img`
  @media screen and (max-width: 375px) {
    width: 13px;
    height: 13px;
  }
`;

export default Card;
