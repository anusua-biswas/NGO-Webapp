import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage/InputDesign';
import Benefactors from './components/Benefactors/BenefactorPage';
import BenefactorProfile from './components/BenefactorProfile/InputDesign';
import Articles from './components/Articles/ArticlesPage';
import BeneficiaryProfilePage from './components/BeneficiaryProfilePage/InputDesign';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/BenefactorPage" element={<Benefactors />} />
        <Route path="/BenefactorProfile" element={<BenefactorProfile />} /> 
        <Route path="/Articles" element={<Articles />} />
        <Route path="/BeneficiaryProfilePage" element={<BeneficiaryProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
