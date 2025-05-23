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

const DateInputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

const DateInput = styled.input`
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  max-width: 280px;
  text-align: center;
  cursor: pointer;
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

const DateOfBirthScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleNext = () => {
    if (selectedDate) {
      const [year, month, day] = selectedDate.split('-').map(Number);
      navigate('/GoalPlanScreen', { state: { day, month, year } });
    }
  };

  return (
    <MobileContainer>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </BackButton>
        <ProgressBar>
          <Progress percent={40} />
        </ProgressBar>
        <LangToggle>
          <img src="https://flagcdn.com/gb.svg" alt="EN" width={16} style={{ marginRight: 6 }} />
          EN
        </LangToggle>
      </Header>

      <Content>
        <Title>Date of Birth</Title>
        <Subtitle>Select your birthdate to continue.</Subtitle>

        <DateInputContainer>
          <DateInput
            type="date"
            value={selectedDate}
            onChange={handleChange}
            max={new Date().toISOString().split('T')[0]}
          />
        </DateInputContainer>
      </Content>

      <Footer>
        <NextButton onClick={handleNext} disabled={!selectedDate}>
          Next
        </NextButton>
      </Footer>
    </MobileContainer>
  );
};

export default DateOfBirthScreen;
