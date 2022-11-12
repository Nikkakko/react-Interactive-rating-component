import React, { useState } from 'react';
import styled from 'styled-components';

const CardInfo = ({ title, desc, submit, setIsSubmitted, setRating }) => {
  const handleSelect = e => {
    setRating(e.target.value);
  };

  return (
    <InfoContainer>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
      <Rating onClick={handleSelect}>
        <RatingButtonStyle value='1'>1</RatingButtonStyle>
        <RatingButtonStyle value='2'>2</RatingButtonStyle>
        <RatingButtonStyle value='3'>3</RatingButtonStyle>
        <RatingButtonStyle value='4'>4</RatingButtonStyle>
        <RatingButtonStyle value='5'>5</RatingButtonStyle>
      </Rating>
      <Button onClick={() => setIsSubmitted(true)}>{submit}</Button>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  margin-top: 30px;

  @media screen and (max-width: 375px) {
    margin-top: 16px;
  }
`;
const Title = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  color: var(--white-color);

  @media screen and (max-width: 375px) {
    font-size: 24px;
    line-height: 30px;
  }
`;
const Desc = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  margin-top: 7px;
  color: var(--light-grey-color);
  width: 340px;

  @media screen and (max-width: 375px) {
    font-size: 14px;
    line-height: 22px;
    width: 279px;
  }
`;

const Rating = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 24px;
`;
const RatingButtonStyle = styled.button`
  background-color: ${({ isSelected }) =>
    !isSelected ? 'var(--dark-blue)' : 'var(--light-grey-color)'};

  &:focus {
    background-color: var(--light-grey-color);
  }

  color: var(--white-color);
  width: 51px;
  height: 51px;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.2px;

  &:hover {
    background: var(--primary-color);
    color: var(--white-color);
  }

  @media screen and (max-width: 375px) {
    width: 42px;
    height: 42px;

    font-size: 14px;
    letter-spacing: 0.175px;
  }
`;

const Button = styled.button`
  width: 341px;
  height: 45px;
  margin-top: 32px;
  cursor: pointer;

  border-radius: 22.5px;
  background: var(--primary-color);
  border: none;
  color: var(--white-color);
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 2px;
  text-transform: uppercase;

  &:hover {
    background: var(--white-color);
    color: var(--primary-color);
  }

  @media screen and (max-width: 375px) {
    width: 279px;
    height: 45px;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 1.86667px;
  }
`;
export default CardInfo;
