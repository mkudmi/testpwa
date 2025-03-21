import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import MeasurePage from './MeasurePage';
import ChartsPage from './ChartsPage';
import UserPage from './UserPage';

function Dashboard({ userOms }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Основное содержимое */}
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<MeasurePage />} />
          <Route path="/charts" element={<ChartsPage />} />
          {/* Передаём userOms во вкладку Пользователь */}
          <Route path="/user" element={<UserPage userOms={userOms} />} />
        </Routes>
      </div>
      {/* Нижняя панель навигации для смартфона */}
      <BottomNav />
    </div>
  );
}

export default Dashboard;
