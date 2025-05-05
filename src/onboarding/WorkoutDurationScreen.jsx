import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaRegCircle, FaRegDotCircle } from 'react-icons/fa';
// import { GiCluster } from 'react-icons/gi';
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

const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Option = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px;
  margin-bottom: 16px;
  background: #FAFBFF;
  border: 2px solid ${props => (props.selected ? '#CFF7E4' : '#F0F0F5')};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
`;

const IconWrapper = styled.div`
  font-size: 24px;
  color: ${props => (props.selected ? '#4CAF50' : '#888')};
  margin-right: 16px;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const OptionLabel = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

const OptionDesc = styled.span`
  font-size: 14px;
  color: #555;
  margin-top: 4px;
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

const WorkoutDurationScreen = () => {
  const [selected, setSelected] = useState('');
  const navigate = useNavigate();

  const options = [
    { key: '0-2', label: '0-2', desc: 'I workout now and then', icon: <FaRegDotCircle /> },
    { key: '3-5', label: '3-5', desc: 'A few workouts per week', icon: <FaRegDotCircle /> },
   { key: '6+', label: '6+', desc: "I’m an athlete", icon: <FaRegDotCircle/> },
  ];

  const handleNext = () => {
    if (selected) {
      navigate('/HeightWeightScreen', { state: { workoutFrequency: selected } });
    }
  };

  return (
    <MobileContainer>
      <Header>
        <BackButton onClick={() => navigate(-1)}><FaArrowLeft /></BackButton>
        <ProgressBar><Progress percent={40} /></ProgressBar>
        <LangToggle>
          <img src="https://flagcdn.com/gb.svg" alt="EN" width={16} style={{ marginRight: 6 }} />
          EN
        </LangToggle>
      </Header>
      <Content>
        <Title>How often do you workout per week?</Title>
        <Subtitle>This will allow us to calibrate a custom plan for your goals</Subtitle>
        <OptionsList>
          {options.map(opt => (
            <Option
              key={opt.key}
              selected={selected === opt.key}
              onClick={() => setSelected(opt.key)}
            >
              <IconWrapper selected={selected === opt.key}>{opt.icon}</IconWrapper>
              <TextGroup>
                <OptionLabel>{opt.label}</OptionLabel>
                <OptionDesc>{opt.desc}</OptionDesc>
              </TextGroup>
            </Option>
          ))}
        </OptionsList>
      </Content>
      <Footer>
        <NextButton disabled={!selected} onClick={handleNext}>Next</NextButton>
      </Footer>
    </MobileContainer>
  );
};

export default WorkoutDurationScreen;
