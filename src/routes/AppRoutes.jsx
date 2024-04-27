import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../views/HomePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/about" element={<AboutPage />} /> */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default AppRoutes;
