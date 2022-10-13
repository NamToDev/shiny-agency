import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Error from './components/Error';
import Freelances from './pages/Freelances';
import Results from './pages/Results';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
div{
  font-family: 'Trebuchet MS', Helvetica, sans-serif;
}
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
