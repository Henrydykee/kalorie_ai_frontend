import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GenderSelect from './onboarding/select_gender';
import WorkoutDurationScreen from './onboarding/WorkoutDurationScreen';
import HeightWeightScreen from './onboarding/HeightWeightScreen';
import DateOfBirthScreen from './onboarding/DateOfBirthScreen';
import GoalPlanScreen from './onboarding/GoalPlanScreen';
import DesiredWeightScreen from './onboarding/DesiredWeightScreen';
import WeightLossSpeedScreen from './onboarding/WeightLossSpeedScreen';
import ComparisonScreen from './onboarding/ComparisonScreen';
import ProblemsScreen from './onboarding/ProblemsScreen';
import DietScreen from './onboarding/DietScreen';
import AccomplishmentScreen from './onboarding/AccomplishmentScreen';
import GreatPotentialScreen from './onboarding/GreatPotentialScreen';
import NameEmailScreen from './onboarding/NameAndEmailScreen';
import CustomPlanScreen from './onboarding/CustomPlanScreen';
import LoadingScreen from './onboarding/LaodingScreen';


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
          <Route path="/DesiredWeightScreen" element={<DesiredWeightScreen />} />
          <Route path="/WeightLossSpeedScreen" element={<WeightLossSpeedScreen />} />
          <Route path="/ComparisonScreen" element={<ComparisonScreen />} />
          <Route path="/ProblemsScreen" element={<ProblemsScreen />} />
          <Route path="/DietScreen" element={<DietScreen />} />
          <Route path="/AccomplishmentScreen" element={<AccomplishmentScreen />} />
           <Route path="/GreatPotentialScreen" element={<GreatPotentialScreen />} />
          <Route path="/NameEmailScreen" element={<NameEmailScreen />} />
           <Route path="/CustomPlanScreen" element={<CustomPlanScreen />} />
            <Route path="/LoadingScreen" element={<LoadingScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;