import React from 'react';
import styled from 'styled-components';
import thankYou from '../assets/images/illustration-thank-you.svg';

const ThankYou = ({ title, desc, rating }) => {
  return (
    <ThankYouContainer>
      <Image src={thankYou} />
      <SelectedRating>
        <RatingSpan>You Selected {rating} out of 5</RatingSpan>
      </SelectedRating>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </ThankYouContainer>
  );
};

const ThankYouContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 45px;

  @media screen and (max-width: 375px) {
    margin-top: 16px;
  }
`;
const Image = styled.img`
  width: 144px;
  height: 96px;
`;

const SelectedRating = styled.div`
  width: 168px;
  height: 32px;

  margin-top: 32px;
  border-radius: 22.5px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-blue);
`;

const RatingSpan = styled.span`
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: var(--primary-color);
  text-align: center;

  @media screen and (max-width: 375px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }
`;
const Title = styled.h1`
  margin-top: 32px;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;

  @media screen and (max-width: 375px) {
    font-size: 24px;
    line-height: 30px;
    text-align: center;
  }
`;

const Desc = styled.p`
  width: 340px;

  margin-top: 7px;

  color: var(--medium-grey);

  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  /* or 160% */

  text-align: center;

  @media screen and (max-width: 375px) {
    width: 279px;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    /* or 157% */

    text-align: center;
  }
`;

export default ThankYou;
