import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/InputDesign";
import Benefactors from "./components/Benefactors/BenefactorPage";
import BenefactorProfile from "./components/BenefactorProfile/InputDesign";
import Articles from "./components/Articles/ArticlesPage"; // Updated
import BeneficiaryProfilePage from "./components/BeneficiaryProfilePage/InputDesign";
import BeneficiaryProfile from "./components/BeneficiaryProfile/BeneficiaryPage";
import SignInPage from "./components/Signin/SignInPage";
import SignUpPage from "./components/Signup/SignUpForm";
import BenefactorProfilePage from "./components/BenefactorProfilePage/InputDesign"; // Updated
import AboutUs from "./components/AboutUs/AboutUs";
import Beneficiaries from "./components/Beneficiaries/Beneficiaries";

import { AuthProvider } from "./components/firebase/AuthContext"; // Since you moved firebase folder to be within components folder


function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/LandingPage" element={<LandingPage />} />
            <Route path="/BeneficiaryProfile" element={<BeneficiaryProfile />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/BenefactorPage" element={<Benefactors />} />
            <Route path="/BenefactorProfile" element={<BenefactorProfile />} />
            <Route path="/Articles" element={<Articles />} />
            <Route path="/BeneficiaryProfilePage" element={<BeneficiaryProfilePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/" element={<SignUpPage />} />
            <Route path="/BenefactorProfilePage" element={<BenefactorProfilePage />} />
            <Route path="/Beneficiaries" element={<Beneficiaries />} />

          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
