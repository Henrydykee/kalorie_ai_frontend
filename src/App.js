import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GenderSelect from './onboarding/select_gender';
import WorkoutDurationScreen from './onboarding/WorkoutDurationScreen';
import HeightWeightScreen from './onboarding/HeightWeightScreen';
import DateOfBirthScreen from './onboarding/DateOfBirthScreen';
import GoalPlanScreen from './onboarding/GoalPlanScreen';


function App() {
  return (
    <div 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#f5f5f5', 
      }} 
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GenderSelect />} />
          <Route path="/WorkoutDurationScreen" element={<WorkoutDurationScreen />} />
          <Route path="/HeightWeightScreen" element={<HeightWeightScreen />} />
          <Route path="/DateOfBirthScreen" element={<DateOfBirthScreen />} />
          <Route path="/GoalPlanScreen" element={<GoalPlanScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;