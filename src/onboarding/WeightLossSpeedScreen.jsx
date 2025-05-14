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
  line-height: 1.2;
`;

const SpeedSelectorContainer = styled.div`
  background: #FAFBFF;
  border-radius: 16px;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 24px;
`;

const SpeedLabel = styled.div`
  font-size: 18px;
  color: #333;
  margin-bottom: 24px;
  text-align: center;
  width: 100%;
`;

const SpeedValue = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #4CAF50;
  margin-bottom: 32px;
  text-align: center;
`;

const SliderLabelsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
`;

const SliderLabel = styled.div`
  font-size: 16px;
  color: #333;
  text-align: ${props => props.align || 'center'};
`;

const SliderContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;
  position: relative;
`;

const SliderTrack = styled.div`
  width: 100%;
  height: 6px;
  background: ${props => props.rightSide ? '#eee' : '#4CAF50'};
  border-radius: 3px;
  position: relative;
`;

const SliderRightTrack = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 6px;
  width: ${props => 100 - props.value}%;
  background: #eee;
  border-radius: 0 3px 3px 0;
`;

const SliderThumb = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid #4CAF50;
  position: absolute;
  top: 50%;
  left: ${props => props.position}%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const SliderValuesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 8px;
`;

const SliderValue = styled.div`
  font-size: 14px;
  color: #555;
  text-align: ${props => props.align || 'center'};
`;

const RecommendedBadge = styled.button`
  background: #F0F0FF;
  border-radius: 15px;
  padding: 12px 24px;
  font-size: 16px;
  color: #333;
  margin-top: 20px;
  text-align: center;
  width: 100%;
  border: none;
  cursor: pointer;
`;

const Footer = styled.div`
  padding: 24px;
  border-top: 1px solid #eee;
  position: sticky;
  bottom: 0;
  background: white;
  margin-top: auto;
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

const WeightLossSpeedScreen = () => {
  const [lossSpeed, setLossSpeed] = useState(1.0);
  const navigate = useNavigate();
  const minSpeed = 0.1;
  const maxSpeed = 1.5;

  const handleSliderChange = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const position = (e.clientX - rect.left) / rect.width;
    const newSpeed = Number((minSpeed + position * (maxSpeed - minSpeed)).toFixed(1));
    setLossSpeed(Math.min(Math.max(newSpeed, minSpeed), maxSpeed));
  };

  const calculateThumbPosition = () => {
    return ((lossSpeed - minSpeed) / (maxSpeed - minSpeed)) * 100;
  };

  const handleNext = () => {
    navigate('/ComparisonScreen', { state: { weightLossSpeed: lossSpeed } });
  };

  return (
    <MobileContainer>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </BackButton>
        <ProgressBar>
          <Progress percent={45} />
        </ProgressBar>
        <LangToggle>
          <img src="https://flagcdn.com/gb.svg" alt="EN" width={16} style={{ marginRight: 6 }} />
          EN
        </LangToggle>
      </Header>

      <Content>
        <Title>How fast do you want to reach your goal?</Title>

        <SpeedSelectorContainer>
          <SpeedLabel>Loss weight speed per week</SpeedLabel>
          
          <SpeedValue>{lossSpeed.toFixed(1)} kg</SpeedValue>
          
          <SliderLabelsContainer>
            <SliderLabel align="left">Slow</SliderLabel>
            <SliderLabel>Medium</SliderLabel>
            <SliderLabel align="right">Fast</SliderLabel>
          </SliderLabelsContainer>
          
          <SliderContainer onClick={handleSliderChange}>
            <SliderTrack>
              <SliderRightTrack value={calculateThumbPosition()} />
            </SliderTrack>
            <SliderThumb position={calculateThumbPosition()} />
          </SliderContainer>
          
          <SliderValuesContainer>
            <SliderValue align="left">{minSpeed.toFixed(1)} kg</SliderValue>
            <SliderValue>0.8 kg</SliderValue>
            <SliderValue align="right">{maxSpeed.toFixed(1)} kg</SliderValue>
          </SliderValuesContainer>

          <RecommendedBadge onClick={() => setLossSpeed(0.8)}>Recommended</RecommendedBadge>
        </SpeedSelectorContainer>
      </Content>

      <Footer>
        <NextButton onClick={handleNext}>Next</NextButton>
      </Footer>
    </MobileContainer>
  );
};

export default WeightLossSpeedScreen;