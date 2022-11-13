import React from 'react';
import './App.css';
import Counter from './components/counter'
import SearchAppBar from './components/searchField'
import MainContainer from './layouts/mainContainer'
import VariableWidthGrid from './layouts/variableWidthGrid'


function App() {
  return (
    <div className="App">
      <MainContainer>
        <VariableWidthGrid />
        <Counter />
        <SearchAppBar />
    </MainContainer>
    </div>
  );
}

export default App;
