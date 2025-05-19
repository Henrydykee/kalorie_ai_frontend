import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

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
  margin-bottom: 30px;
  display: flex;
  align-items: baseline;
`;

const WeightUnit = styled.span`
  font-size: 36px;
  margin-left: 5px;
`;

const CustomSliderContainer = styled.div`
  width: 100%;
  padding: 0 10px;
  margin-bottom: 20px;
`;

// Custom styles for rc-slider
const sliderStyles = {
  track: {
    backgroundColor: '#E0E0E0',
    height: 8,
  },
  rail: {
    backgroundColor: '#E0E0E0',
    height: 8,
  },
  handle: {
    borderColor: '#4CAF50',
    backgroundColor: '#4CAF50',
    opacity: 1,
    height: 24,
    width: 24,
    marginTop: -8,
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  },
  trackTint: {
    backgroundColor: '#4CAF50',
    height: 8,
  }
};

const SliderMarksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
  padding: 0 10px;
`;

const SliderMark = styled.div`
  color: #777;
  font-size: 14px;
  text-align: center;
  width: 60px;
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

// Weight selector bubble animation
const WeightBubble = styled.div`
  position: absolute;
  background: #4CAF50;
  color: white;
  font-weight: bold;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 14px;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.2s;
  pointer-events: none;
`;

const DesiredWeightScreen = () => {
  const [goal, setGoal] = useState('lose');
  const [weight, setWeight] = useState(44);
  const [showBubble, setShowBubble] = useState(false);
  const minWeight = 40;
  const maxWeight = 120;
  const navigate = useNavigate();

  const handleSliderChange = (value) => {
    setWeight(value);
    setShowBubble(true);
  };

  useEffect(() => {
    if (showBubble) {
      const timer = setTimeout(() => {
        setShowBubble(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showBubble]);

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

            <CustomSliderContainer>
              <div style={{ position: 'relative' }}>
                {showBubble && <WeightBubble visible={showBubble}>{weight} kg</WeightBubble>}
                <Slider
                  min={minWeight}
                  max={maxWeight}
                  value={weight}
                  onChange={handleSliderChange}
                  trackStyle={sliderStyles.trackTint}
                  railStyle={sliderStyles.rail}
                  handleStyle={sliderStyles.handle}
                />
              </div>
            </CustomSliderContainer>

            <SliderMarksContainer>
              <SliderMark>{minWeight} kg</SliderMark>
              <SliderMark>{maxWeight} kg</SliderMark>
            </SliderMarksContainer>
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