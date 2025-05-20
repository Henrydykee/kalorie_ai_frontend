import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
  justify-content: center;
  position: relative;
`;

const ContentWrapper = styled.div`
  text-align: center;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 40px;
  color: #222;
  line-height: 1.3;
`;

const LoadingText = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: #4CAF50;
  margin: 0;
`;

const ProcessingTextWrapper = styled.div`
  height: 24px;
  margin-bottom: 36px;
  position: relative;
`;

const ProcessingText = styled.p`
  font-size: 16px;
  color: #777;
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  position: absolute;
  width: 100%;
  text-align: center;
`;

const ProgressWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin-top: 20px;
`;

const ProgressBackground = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #f0f0f0;
  position: absolute;
`;

// Circle computation constants
const RADIUS = 55;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const ProgressCircle = styled.svg`
  width: 120px;
  height: 120px;
  position: absolute;
  transform: rotate(-90deg);
`;

const ProgressIndicator = styled.circle.attrs(props => ({
  strokeDasharray: `${(props.progress / 100) * CIRCUMFERENCE} ${CIRCUMFERENCE}`,
}))`
  cx: 60;
  cy: 60;
  r: ${RADIUS};
  fill: transparent;
  stroke: #4CAF50;
  stroke-width: 10;
  transition: stroke-dasharray 0.5s ease-in-out;
`;

const LoadingScreen = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [processingStep, setProcessingStep] = useState(0);

  const processingSteps = [
    "Estimating your metabolic age...",
    "Calculating your daily calorie needs...",
    "Analyzing your macronutrient requirements...",
    "Customizing your nutrition plan...",
    "Finalizing your personalized recommendations..."
  ];

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          const next = Math.min(prev + 1, 100);
          if (next === 20) setProcessingStep(1);
          if (next === 40) setProcessingStep(2);
          if (next === 60) setProcessingStep(3);
          if (next === 80) setProcessingStep(4);
          if (next === 100) {
            clearInterval(interval);
            setTimeout(() => navigate('/custom-plan'), 500);
          }
          return next;
        });
      }, 50);
    }, 500);

    return () => clearTimeout(initialDelay);
  }, [navigate]);

  return (
    <MobileContainer>
      <ContentWrapper>
        <Title>We're setting<br />this app up for you</Title>

        <ProcessingTextWrapper>
          {processingSteps.map((step, idx) => (
            <ProcessingText key={idx} visible={idx === processingStep}>
              {step}
            </ProcessingText>
          ))}
        </ProcessingTextWrapper>

        <ProgressWrapper>
          <ProgressBackground />
          <ProgressCircle viewBox="0 0 120 120">
            <ProgressIndicator progress={progress} />
          </ProgressCircle>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
            <LoadingText>{progress}%</LoadingText>
          </div>
        </ProgressWrapper>
      </ContentWrapper>
    </MobileContainer>
  );
};

export default LoadingScreen;
