import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './presentation/Header/Header';
import Dashboard from './presentation/pages/Dashboard';
import ListShoeModels from './presentation/pages/ListShoeModels';
import ListStores from './presentation/pages/ListStores';

const App: React.FC = () => (
  <Router>
    <div className="m-auto flex flex-col items-center w-full">
      <Header />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/stores" element={<ListStores />} />
        <Route path="/stores/:store_id" element={<ListShoeModels />} />
      </Routes>
    </div>
  </Router>
);

export default App;
