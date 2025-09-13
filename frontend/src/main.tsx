import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import "aos/dist/aos.css";

import Dashboard from './pages/Dashboard';
import WeeklyPlans from './pages/WeeklyPlans';
import MonthlyPlans from './pages/MonthlyPlans';
import DataPlans from './pages/DataPlans';
import Payment from './pages/Payment';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/weekly-plans',
    element: <WeeklyPlans />,
  },
  {
    path: '/monthly-plans',
    element: <MonthlyPlans />,
  },
  {
    path: '/data-plans',
    element: <DataPlans />,
  },
  {
    path: '/payment',
    element: <Payment />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
