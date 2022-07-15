import React from 'react';
import './App.css';
import { Body } from './components/Body';
import { Header } from './components/Header';
import { GlobalContextWrapper } from './context/GlobalContext';

function App() {
  return (
    <>
      <GlobalContextWrapper>
        <Header />
        <Body />
      </GlobalContextWrapper>
    </>
  );
}

export default App;
