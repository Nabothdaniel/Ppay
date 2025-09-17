import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import "aos/dist/aos.css";

import Dashboard from './pages/Dashboard';
import DataPlans from './pages/DataPlans';
import Payment from './pages/Payment';
import ConfirmPayment from './components/payment/ConfirmPayment'
import SetupPin from './pages/SetupPin'

import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import Success from './components/payment/Success';
import ErrorPage from './components/payment/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
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
    path:'/confirm-payment',
    element:<ConfirmPayment/>
  },
  {
    path:'/setup-pin',
    element:<SetupPin/>
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path:'success',
    element:<Success/>
  },
  {
    path:'/error',
    element:<ErrorPage/>
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
