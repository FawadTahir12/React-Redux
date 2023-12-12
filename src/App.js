import React from 'react';
import './App.css';
import HomeContainer from './containers/homecontainer';
import HeaderContainer from './containers/headercontainer';
function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <HomeContainer/>
    </div>
  );
}

export default App;
