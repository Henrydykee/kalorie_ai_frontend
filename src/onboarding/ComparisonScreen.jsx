import React from 'react';
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
  font-size: 32px;
  margin-top: 32px;
  margin-bottom: 64px;
  color: #000;
  text-align: center;
  font-weight: bold;
  line-height: 1.2;
`;

const ComparisonContainer = styled.div`
  background: #F0F0FF;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const ComparisonChartContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 20px 0;
  margin-bottom: 40px;
`;

const ChartColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
`;

const ChartLabel = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  margin-bottom: 20px;
`;

const ChartBar = styled.div`
  width: 100%;
  height: ${props => props.height || 50}px;
  background: ${props => props.background || '#ddd'};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

const ComparisonText = styled.p`
  font-size: 18px;
  color: #555;
  text-align: center;
  margin: 0;
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

const ComparisonScreen = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/next-screen');
  };

  return (
    <MobileContainer>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </BackButton>
        <ProgressBar>
          <Progress percent={50} />
        </ProgressBar>
        <LangToggle>
          <img src="https://flagcdn.com/gb.svg" alt="EN" width={16} style={{ marginRight: 6 }} />
          EN
        </LangToggle>
      </Header>

      <Content>
        <Title>Lose twice as much weight with KalorieAi vs on your own</Title>

        <ComparisonContainer>
          <ComparisonChartContainer>
            <ChartColumn>
              <ChartLabel>Without this app</ChartLabel>
              <ChartBar height={80} background="#E0E0E0">20%</ChartBar>
            </ChartColumn>
            
            <ChartColumn>
              <ChartLabel>With this app</ChartLabel>
              <ChartBar height={200} background="#333333">60%</ChartBar>
            </ChartColumn>
          </ComparisonChartContainer>
          
          <ComparisonText>
            KalorieAi makes it easy and holds you accountable.
          </ComparisonText>
        </ComparisonContainer>
      </Content>

      <Footer>
        <NextButton onClick={handleNext}>Next</NextButton>
      </Footer>
    </MobileContainer>
  );
};

export default ComparisonScreen;