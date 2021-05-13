import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AdDesigner from './components/AdDesigner';
import Votes from './components/Votes';
import HeaderNew from './components/HeaderNew';
import AdNew from './components/AdNew';

function App() {
  return (
    <div className="App">
      <HeaderNew user="Kaleigh"/>
      <div className="App_Ads">
        <AdNew flavor="Chocolate" fontSize={30} theme={true} />
        <AdNew flavor="Vanilla" fontSize={30} theme={false} />
        <AdNew flavor="Strawberry" fontSize={30} theme={true} />
      </div>
      <div className="Body">
        <AdDesigner />
        <Votes />
      </div>
    </div>
  );
}

export default App;
