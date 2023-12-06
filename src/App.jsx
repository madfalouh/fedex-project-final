import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

import Dashboard from './pages/Dashboard';
import CourrierDashboard from './pages/CourrierDashboard';
import CourrierDashboardRoutes from './pages/CourrierDashboardRoutes';
import CourrierDashboardMap from './pages/CourrierDashboardMap';
import CourrierDashboardMap1 from './pages/CourrierDashboardMap1';
import Dashboard1 from './pages/Dashboard1';
import Login from './pages/login/Login'

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
            <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/courier" element={<CourrierDashboard />} />
        <Route exact path="/courier/routes" element={<CourrierDashboardRoutes />} />
        <Route exact path="/courier/maps" element={<CourrierDashboardMap />} />
        <Route exact path="/maps" element={<CourrierDashboardMap1 />} />
        <Route exact path="/vice" element={<Dashboard1 />} /> 
      </Routes>
    </>
  );
}

export default App;
