import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import classicIcon from './assets/classic.svg';
import pesIcon from './assets/pescatarian.svg';
import VegetarianIcon from './assets/vegetarian.svg';
import veganIcon from './assets/vegan.svg';

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
`;

const Header = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BackButton = styled.button`
  background: #fff;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #4CAF50;
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
`;

const Title = styled.h1`
  font-size: 24px;
  margin-top: 32px;
  margin-bottom: 8px;
  color: #000;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 24px;
`;

const Option = styled.button`
  width: 100%;
  padding: 16px;
  margin-bottom: 16px;
  border: 2px solid;
  border-color: ${props => (props.selected ? '#CFF7E4' : '#F0F0F5')};
  background: ${props => (props.selected ? '#F5FFF7' : '#FAFBFF')};
  border-radius: 12px;
  font-size: 16px;
  color: ${props => (props.selected ? '#000' : '#333')};
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  text-align: left;
  
  &:hover {
    transform: translateX(8px);
  }
`;

const IconWrapper = styled.span`
  margin-right: 12px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.div`
  padding: 24px;
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

const DietScreen = () => {
  const [diet, setDiet] = useState('');
  const navigate = useNavigate();

  const dietOptions = [
    { 
      text: 'Classic', 
      iconPath: classicIcon 
    },
    { 
      text: 'Pescatarian', 
      iconPath: pesIcon
    },
    { 
      text: 'Vegetarian', 
      iconPath: VegetarianIcon
    },
    { 
      text: 'Vegan', 
      iconPath: veganIcon
    },
  ];

  const handleNext = () => {
    if (diet) {
      // Navigate to next screen, passing problem in state
      navigate('/-', { state: { problem: diet } });
    }
  };

  return (
    <MobileContainer>
      <Header>
        <BackButton onClick={() => navigate(-1)}><FaArrowLeft /></BackButton>
        <ProgressBar>
          <Progress percent={20} />
        </ProgressBar>
        <LangToggle>
          <img src="https://flagcdn.com/gb.svg" alt="EN" width={16} style={{ marginRight: 6 }} />
          EN
        </LangToggle>
      </Header>
      <Content>
        <Title>What's stopping you from reaching your goals?</Title>

        {dietOptions.map(option => (
          <Option
            key={option.text}
            selected={diet === option.text}
            onClick={() => setDiet(option.text)}
          >
            <IconWrapper>
              <img 
                src={option.iconPath} 
                alt={option.text}
                width={24}
                height={24}
              />
            </IconWrapper>
            {option.text}
          </Option>
        ))}
      </Content>
      <Footer>
        <NextButton disabled={!diet} onClick={handleNext}>
          Next
        </NextButton>
      </Footer>
    </MobileContainer>
  );
};

export default DietScreen;