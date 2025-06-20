import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Inicio from './componentes/Inicio';
import Cursos from './componentes/Cursos';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="inicio" element={<Inicio />} />
          <Route path="cursos" element={<Cursos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
