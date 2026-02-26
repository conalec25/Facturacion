import React from 'react';
import ListaFacturas from './ListaFacturas';
import CrearFactura from './CrearFactura';

const App: React.FC = () => {
  return (
    <div>
      <h1>Facturación</h1>
      <CrearFactura />
      <ListaFacturas />
    </div>
  );
};

export default App;