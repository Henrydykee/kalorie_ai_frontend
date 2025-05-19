import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MobileContainer = styled.div`
  width: 375px;
  height: 812px;
  border: 1px solid #ddd;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  background: #fff;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Header = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BackButton = styled.button`
  background: #4CAF50;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
`;

const ProgressBar = styled.div`
  flex: 1;
  height: 4px;
  background: #eee;
  border-radius: 2px;
  margin: 0 12px;
  position: relative;
`;

const Progress = styled.div`
  position: absolute;
  height: 100%;
  width: ${props => props.percent || 0}%;
  background: #4CAF50;
  border-radius: 2px;
  transition: width 0.3s;
`;

const LangToggle = styled.div`
  font-size: 14px;
  background: #F5FFF7;
  padding: 6px 12px;
  border-radius: 20px;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  flex: 1;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-top: 32px;
  margin-bottom: 8px;
  color: #000;
  text-align: center;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 24px;
  text-align: center;
`;

const FieldContainer = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  color: #333;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s;

  &:focus {
    border-color: #4CAF50;
    outline: none;
  }
`;

const Footer = styled.div`
  padding: 24px;
  border-top: 1px solid #eee;
  position: sticky;
  bottom: 0;
  background: white;
`;

const NextButton = styled.button`
  width: 100%;
  padding: 16px;
  background: ${props => (props.disabled ? '#C4C4C4' : '#4CAF50')};
  border: none;
  border-radius: 12px;
  font-size: 16px;
  color: #fff;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background 0.2s;
`;

const HeightWeightScreen = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const navigate = useNavigate();

  // Ensure only integers
  const handleHeightChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setHeight(value);
    }
  };

  const handleWeightChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setWeight(value);
    }
  };

  const handleNext = () => {
    if (!height || !weight) return;
    navigate('/DateOfBirthScreen', { state: { height: parseInt(height, 10), weight: parseInt(weight, 10) } });
  };

  const isDisabled = !height || !weight;

  return (
    <MobileContainer>
      <Header>
        <BackButton onClick={() => navigate(-1)}><FaArrowLeft /></BackButton>
        <ProgressBar><Progress percent={20} /></ProgressBar>
        <LangToggle>
          <img src="https://flagcdn.com/gb.svg" alt="EN" width={16} style={{ marginRight: 6 }} />EN
        </LangToggle>
      </Header>

      <Content>
        <Title>Height & weight</Title>
        <Subtitle>We will calibrate your custom plan.</Subtitle>

        <FieldContainer>
          <Label htmlFor="height-input">Height (cm)</Label>
          <Input
            id="height-input"
            type="text"
            placeholder="Enter height in cm"
            value={height}
            onChange={handleHeightChange}
          />
        </FieldContainer>

        <FieldContainer>
          <Label htmlFor="weight-input">Weight (kg)</Label>
          <Input
            id="weight-input"
            type="text"
            placeholder="Enter weight in kg"
            value={weight}
            onChange={handleWeightChange}
          />
        </FieldContainer>
      </Content>

      <Footer>
        <NextButton onClick={handleNext} disabled={isDisabled}>Next</NextButton>
      </Footer>
    </MobileContainer>
  );
};

export default HeightWeightScreen;