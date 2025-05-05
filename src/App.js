// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GenderSelect from './onboarding/select_gender';
import WorkoutDurationScreen from './onboarding/WorkoutDurationScreen';
import HeightWeightScreen from './onboarding/HeightWeightScreen';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5', // Optional: adds light background
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GenderSelect />} />
          <Route
            path="/WorkoutDurationScreen"
            element={<WorkoutDurationScreen />}
          />
           <Route
            path="/HeightWeightScreen"
            element={<HeightWeightScreen />}
          />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

