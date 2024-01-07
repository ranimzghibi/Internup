import React from 'react';
import Welcome from "./components/Welcome";
import Account from "./components/Account";
import SigninSignup from "./components/SigninSignup";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/account" element={<Account />} />
        <Route path="/signin-signup" element={<SigninSignup />} />
      </Routes>
    </Router>
  );
}

export default App;
