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

const MeasurementsContainer = styled.div`
  background: #FAFBFF;
  border-radius: 16px;
  padding: 24px 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ColumnTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const SelectorContainer = styled.div`
  height: 250px;
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectedValueIndicator = styled.div`
  position: absolute;
  height: 50px;
  width: 80%;
  background: #F0F0F5;
  border-radius: 8px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const ScrollableValues = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  scroll-snap-type: y mandatory;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ValueItem = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.selected ? '18px' : '16px'};
  color: ${props => props.selected ? '#000' : '#aaa'};
  font-weight: ${props => props.selected ? '600' : '400'};
  transition: all 0.2s;
  scroll-snap-align: center;
  margin: 4px 0;
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
  const [selectedHeight, setSelectedHeight] = useState(167);
  const [selectedWeight, setSelectedWeight] = useState(54);
  const navigate = useNavigate();
  
  const heightScrollRef = useRef(null);
  const weightScrollRef = useRef(null);
  
  // Generate height values from 150cm to 200cm
  const heights = Array.from({ length: 51 }, (_, i) => (150 + i));
  
  // Generate weight values from 40kg to 120kg
  const weights = Array.from({ length: 81 }, (_, i) => (40 + i));

  // Handle scrolling and selection for height
  useEffect(() => {
    const heightScroller = heightScrollRef.current;
    if (!heightScroller) return;
    
    const scrollToSelectedHeight = () => {
      const index = heights.indexOf(selectedHeight);
      if (index !== -1) {
        const itemHeight = 58; // Height of each item (50px + 8px margin)
        const scrollTop = index * itemHeight;
        heightScroller.scrollTop = scrollTop;
      }
    };
    
    scrollToSelectedHeight();
    
    const handleHeightScroll = () => {
      const scrollTop = heightScroller.scrollTop;
      const itemHeight = 58; // 50px height + 8px margin
      const index = Math.round(scrollTop / itemHeight);
      
      if (heights[index] !== selectedHeight) {
        setSelectedHeight(heights[index] || selectedHeight);
      }
    };
    
    const debounce = (fn, delay) => {
      let timeoutId;
      return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
      };
    };
    
    const debouncedScroll = debounce(handleHeightScroll, 50);
    
    heightScroller.addEventListener('scroll', debouncedScroll);
    return () => heightScroller.removeEventListener('scroll', debouncedScroll);
  }, [selectedHeight, heights]);
  
  // Handle scrolling and selection for weight
  useEffect(() => {
    const weightScroller = weightScrollRef.current;
    if (!weightScroller) return;
    
    const scrollToSelectedWeight = () => {
      const index = weights.indexOf(selectedWeight);
      if (index !== -1) {
        const itemHeight = 58; // Height of each item (50px + 8px margin)
        const scrollTop = index * itemHeight;
        weightScroller.scrollTop = scrollTop;
      }
    };
    
    scrollToSelectedWeight();
    
    const handleWeightScroll = () => {
      const scrollTop = weightScroller.scrollTop;
      const itemHeight = 58; // 50px height + 8px margin
      const index = Math.round(scrollTop / itemHeight);
      
      if (weights[index] !== selectedWeight) {
        setSelectedWeight(weights[index] || selectedWeight);
      }
    };
    
    const debounce = (fn, delay) => {
      let timeoutId;
      return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
      };
    };
    
    const debouncedScroll = debounce(handleWeightScroll, 50);
    
    weightScroller.addEventListener('scroll', debouncedScroll);
    return () => weightScroller.removeEventListener('scroll', debouncedScroll);
  }, [selectedWeight, weights]);

  const handleNext = () => {
    navigate('/DateOfBirthScreen', { state: { height: selectedHeight, weight: selectedWeight } });
  };

  return (
    <MobileContainer>
      <Header>
        <BackButton onClick={() => navigate(-1)}><FaArrowLeft /></BackButton>
        <ProgressBar><Progress percent={20} /></ProgressBar>
        <LangToggle>
          <img src="https://flagcdn.com/gb.svg" alt="EN" width={16} style={{ marginRight: 6 }} />
          EN
        </LangToggle>
      </Header>
      <Content>
        <Title>Height & weight</Title>
        <Subtitle>We will calibrate your custom plan.</Subtitle>
        
        <MeasurementsContainer>
          <Column>
            <ColumnTitle>Height</ColumnTitle>
            <SelectorContainer>
              <SelectedValueIndicator />
              <ScrollableValues ref={heightScrollRef}>
                {heights.map(height => (
                  <ValueItem 
                    key={`height-${height}`} 
                    selected={height === selectedHeight}
                    onClick={() => {
                      setSelectedHeight(height);
                      const index = heights.indexOf(height);
                      heightScrollRef.current.scrollTop = index * 58;
                    }}
                  >
                    {height} cm
                  </ValueItem>
                ))}
              </ScrollableValues>
            </SelectorContainer>
          </Column>
          
          <Column>
            <ColumnTitle>Weight</ColumnTitle>
            <SelectorContainer>
              <SelectedValueIndicator />
              <ScrollableValues ref={weightScrollRef}>
                {weights.map(weight => (
                  <ValueItem 
                    key={`weight-${weight}`} 
                    selected={weight === selectedWeight}
                    onClick={() => {
                      setSelectedWeight(weight);
                      const index = weights.indexOf(weight);
                      weightScrollRef.current.scrollTop = index * 58;
                    }}
                  >
                    {weight} kg
                  </ValueItem>
                ))}
              </ScrollableValues>
            </SelectorContainer>
          </Column>
        </MeasurementsContainer>
      </Content>
      <Footer>
        <NextButton onClick={handleNext}>Next</NextButton>
      </Footer>
    </MobileContainer>
  );
};

export default HeightWeightScreen;