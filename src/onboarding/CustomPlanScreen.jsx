import React from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaHeart, FaUtensils, FaClock } from 'react-icons/fa';
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
  position: relative;
`;

const Header = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
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
  cursor: pointer;
  color: #fff;
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
  width: 100%;
  background: #4CAF50;
  border-radius: 2px;
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
  overflow-y: auto;
  height: calc(100% - 142px); /* Adjust based on header + footer height */
`;

const SuccessIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
  font-size: 24px;
  color: #4CAF50;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-top: 12px;
  margin-bottom: 24px;
  color: #000;
  text-align: center;
  font-weight: bold;
`;

const Card = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`;

const GoalCard = styled(Card)`
  text-align: center;
`;

const GoalTitle = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 12px;
`;

const GoalValue = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #4CAF50;
`;

const RecommendationTitle = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 4px;
`;

const SmallText = styled.p`
  font-size: 12px;
  color: #888;
  margin-bottom: 16px;
`;

const MacroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
`;

const MacroItem = styled.div`
  margin-bottom: 16px;
  position: relative;
`;

const MacroLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const MacroName = styled.span`
  font-size: 14px;
  color: #555;
`;

const EditButton = styled.button`
  background: transparent;
  border: none;
  color: #888;
  cursor: pointer;
  font-size: 14px;
`;

const CircleChart = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background: #fff;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 6px solid #f0f0f0;
  }
`;

const CircleProgress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 6px solid;
  border-color: ${props => props.color};
  clip-path: ${props => `polygon(50% 50%, 50% 0, ${props.progress > 75 ? '100% 0, 100% 100%, 0 100%, 0 0' : props.progress > 50 ? '100% 0, 100% 100%, 0 100%' : props.progress > 25 ? '100% 0, 100% 100%' : '100% 0'}, 50% 0)`};
  transform: rotate(${props => props.rotation || '0deg'});
`;

const CircleValue = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  z-index: 1;
`;

const HealthScoreCard = styled.div`
  background: #f0f9f0;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
`;

const StepsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StepIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.highlighted ? '#E6F4FF' : '#f5f5f5'};
  color: ${props => props.highlighted ? '#2196F3' : '#666'};
  border: ${props => props.highlighted ? '1px dashed #2196F3' : 'none'};
`;

const StepText = styled.p`
  font-size: 14px;
  color: #333;
`;

const SourcesList = styled.div`
  margin-top: 16px;
`;

const SourcesTitle = styled.p`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-bottom: 8px;
`;

const SourceItem = styled.li`
  font-size: 12px;
  color: #666;
  margin-bottom: 6px;
`;

const Footer = styled.div`
  padding: 24px;
  background: #fff;
  position: sticky;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.05);
`;

const StartButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #4CAF50;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: #3d9140;
  }
`;

const CustomPlanScreen = () => {
  const navigate = useNavigate();

  // Adding a reference for the content section to enable scrolling
  const contentRef = React.useRef(null);

  // Scroll to top function for when the page loads
  React.useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <MobileContainer>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </BackButton>
        <ProgressBar>
          <Progress />
        </ProgressBar>
        <LangToggle>
          <img src="https://flagcdn.com/gb.svg" alt="EN" width={16} style={{ marginRight: 6 }} />
          EN
        </LangToggle>
      </Header>
      <Content ref={contentRef}>
        <SuccessIcon>✓</SuccessIcon>
        <Title>
          Congratulations!<br />
          your custom plan is ready
        </Title>

        <GoalCard>
          <GoalTitle>You Should Gain :</GoalTitle>
          <GoalValue>7 kg by April 13, 2025</GoalValue>
        </GoalCard>

        <Card>
          <RecommendationTitle>Daily recommendation</RecommendationTitle>
          <SmallText>You can edit this anytime</SmallText>

          <MacroGrid>
            <MacroItem>
              <MacroLabel>
                <MacroName>Calories</MacroName>
                <EditButton>✎</EditButton>
              </MacroLabel>
              <CircleChart>
                <CircleProgress color="#F7AC66" progress={70} rotation="0deg" />
                <CircleValue>2,417</CircleValue>
              </CircleChart>
            </MacroItem>

            <MacroItem>
              <MacroLabel>
                <MacroName>Carbs</MacroName>
                <EditButton>✎</EditButton>
              </MacroLabel>
              <CircleChart>
                <CircleProgress color="#9370DB" progress={75} rotation="0deg" />
                <CircleValue>309g</CircleValue>
              </CircleChart>
            </MacroItem>

            <MacroItem>
              <MacroLabel>
                <MacroName>Fats</MacroName>
                <EditButton>✎</EditButton>
              </MacroLabel>
              <CircleChart>
                <CircleProgress color="#FF6B6B" progress={65} rotation="0deg" />
                <CircleValue>67g</CircleValue>
              </CircleChart>
            </MacroItem>

            <MacroItem>
              <MacroLabel>
                <MacroName>Protein</MacroName>
                <EditButton>✎</EditButton>
              </MacroLabel>
              <CircleChart>
                <CircleProgress color="#5DADE2" progress={60} rotation="0deg" />
                <CircleValue>120g</CircleValue>
              </CircleChart>
            </MacroItem>

            <MacroItem>
              <MacroLabel>
                <MacroName>Sugar</MacroName>
                <EditButton>✎</EditButton>
              </MacroLabel>
              <CircleChart>
                <CircleProgress color="#D4E157" progress={55} rotation="0deg" />
                <CircleValue>144g</CircleValue>
              </CircleChart>
            </MacroItem>

            <MacroItem>
              <HealthScoreCard>
                <MacroName>Health Score</MacroName>
                <CircleChart>
                  <CircleProgress color="#4CAF50" progress={70} rotation="0deg" />
                  <CircleValue>7/10</CircleValue>
                </CircleChart>
              </HealthScoreCard>
            </MacroItem>
          </MacroGrid>
        </Card>

        <Card>
          <RecommendationTitle>How to reach your goals:</RecommendationTitle>
          <StepsList>
            <Step>
              <StepIcon>
                <FaHeart />
              </StepIcon>
              <StepText>Use health scores to improve your routine</StepText>
            </Step>

            <Step>
              <StepIcon>
                <FaUtensils />
              </StepIcon>
              <StepText>Track your food</StepText>
            </Step>

            <Step>
              <StepIcon>
                <FaClock />
              </StepIcon>
              <StepText>Follow your daily calorie recommendation</StepText>
            </Step>

            <Step>
              <StepIcon highlighted>
                <span style={{ fontWeight: 'bold' }}>⋮⋮</span>
              </StepIcon>
              <StepText>Balance your carbs, proteins, and fat</StepText>
            </Step>
          </StepsList>

          <SourcesTitle>Your Plan is based on the following sources, including peer-reviewed medical studies:</SourcesTitle>
          <SourcesList>
            <SourceItem>Basal metabolic rate</SourceItem>
            <SourceItem>Calorie counting - Harvard</SourceItem>
            <SourceItem>International Society of Sports Nutrition</SourceItem>
            <SourceItem>National Institutes of Health</SourceItem>
          </SourcesList>
        </Card>
      </Content>
      <Footer>
        <StartButton>Let's get started!</StartButton>
      </Footer>
    </MobileContainer>
  );
};

export default CustomPlanScreen;