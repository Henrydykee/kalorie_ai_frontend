import React, { useState, useRef, useEffect } from 'react';
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

const WeightSelectorContainer = styled.div`
  background: #FAFBFF;
  border-radius: 16px;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;

const GoalOption = styled.div`
  width: 100%;
  padding: 16px;
  text-align: center;
  font-size: 18px;
  font-weight: ${props => props.active ? '600' : '400'};
  color: ${props => props.active ? '#000' : '#aaa'};
  border-bottom: 1px solid #eee;
`;

const WeightValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  width: 100%;
`;

const WeightValue = styled.div`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const WeightUnit = styled.span`
  font-size: 36px;
  margin-left: 5px;
`;

const SliderContainer = styled.div`
  width: 100%;
  padding: 0 10px;
  position: relative;
`;

const SliderTrack = styled.div`
  width: 100%;
  height: 6px;
  background: #eee;
  border-radius: 3px;
  position: relative;
`;

const SliderFill = styled.div`
  position: absolute;
  height: 100%;
  background: #4CAF50;
  border-radius: 3px;
  left: 0;
  width: ${props => props.fillWidth}%;
`;

const SliderThumb = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #4CAF50;
  position: absolute;
  top: 50%;
  left: ${props => props.position}%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
`;

const SliderMarks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

const SliderMark = styled.div`
  color: #aaa;
  font-size: 14px;
  position: relative;
  width: 1px;
  height: 10px;
  background: ${props => props.active ? '#4CAF50' : '#ddd'};
  margin-top: 5px;
  
  &:before {
    content: "${props => props.label}";
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
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
  background: #4CAF50;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;
`;

const DesiredWeightScreen = () => {
  const [goal, setGoal] = useState('lose');
  const [weight, setWeight] = useState(44);
  const minWeight = 40;
  const maxWeight = 120;
  const navigate = useNavigate();

  const sliderRef = useRef(null);

  const handleSliderClick = (e) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const position = (e.clientX - rect.left) / rect.width;
      const newWeight = Math.round(minWeight + position * (maxWeight - minWeight));
      setWeight(Math.min(Math.max(newWeight, minWeight), maxWeight));
    }
  };

  const calculateThumbPosition = () => {
    return ((weight - minWeight) / (maxWeight - minWeight)) * 100;
  };

  const handleNext = () => {
    navigate('/WeightLossSpeedScreen', { state: { weightGoal: { type: goal, targetWeight: weight } } });
  };

  return (
    <MobileContainer>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </BackButton>
        <ProgressBar>
          <Progress percent={60} />
        </ProgressBar>
        <LangToggle>
          <img src="https://flagcdn.com/gb.svg" alt="EN" width={16} style={{ marginRight: 6 }} />
          EN
        </LangToggle>
      </Header>

      <Content>
        <Title>What is your desired weight?</Title>

        <WeightSelectorContainer>
          <GoalOption 
            active={goal === 'lose'} 
            onClick={() => setGoal('lose')}
          >
            Lose weight
          </GoalOption>

          <WeightValueContainer>
            <WeightValue>
              {weight}<WeightUnit>kg</WeightUnit>
            </WeightValue>

            <SliderContainer 
              ref={sliderRef}
              onClick={handleSliderClick}
            >
              <SliderTrack>
                <SliderFill fillWidth={calculateThumbPosition()} />
              </SliderTrack>
              <SliderThumb position={calculateThumbPosition()} />
              
              <SliderMarks>
                {[...Array(7)].map((_, i) => {
                  const markValue = minWeight + (i * (maxWeight - minWeight) / 6);
                  const isActive = weight >= markValue;
                  
                  return (
                    <SliderMark 
                      key={i} 
                      active={isActive}
                      label={i === 6 ? `${maxWeight} kg` : i === 0 ? `${minWeight} kg` : ''}
                    />
                  );
                })}
              </SliderMarks>
            </SliderContainer>
          </WeightValueContainer>
        </WeightSelectorContainer>
      </Content>

      <Footer>
        <NextButton onClick={handleNext}>Next</NextButton>
      </Footer>
    </MobileContainer>
  );
};

export default DesiredWeightScreen;