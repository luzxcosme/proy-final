import React from 'react';
import { BarraTitulo } from './componentes/BarraTitulo';
import { Header } from './componentes/Header';
import { Footer } from './componentes/Footer';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BarraTitulo />
      <Header />
      <div className="flex-grow-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;

