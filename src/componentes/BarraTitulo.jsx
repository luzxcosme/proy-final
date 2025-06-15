import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export function BarraTitulo() {
  return (
    <div className="bg-info text-white text-center py-3.5" style={{ width: '100%' }}>
      <div className="container">
        <h1 className="display-3 fw-bold">Academia: "Info Bailes"</h1>
        <p className="lead">Nombre: LUZ MARINA COSME</p>
        <p className="lead">CI: 12364089LP</p>
      </div>
    </div>
  );
}
