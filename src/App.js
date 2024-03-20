import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MiniDrawer from './components/MiniDrawer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MiniDrawer />} />
      
      </Routes>
    </Router>
  );
}

export default App;
