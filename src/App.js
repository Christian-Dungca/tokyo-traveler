import React from 'react';
import Header from './components/header/Header';
import About from './components/aboutTokyoTraveler/About';
import Articles from './components/articles/Articles';
import AboutBudget from './components/aboutBudgetApp/AboutBudget';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Articles />
      <AboutBudget />
    </div>
  );
}

export default App;
