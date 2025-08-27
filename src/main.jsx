import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import Modal from './components/Fragments/Modal'
import Navbar from './components/Fragments/Navbar'
import LogoutPage from './pages/Logout'
import DashboardLayout from './components/Layouts/DahboardLayout'
import DashboardPage from './pages/Dashboard'
import Espresso from './components/Fragments/Espresso'
import Tubruk from './components/Fragments/Tubruk'
import CardStep from './components/Fragments/CardStep'
import StepMenu from './components/Fragments/StepMenu'
import StepPage from './pages/Step'
import Prank from './components/Fragments/Prank'

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
    errorElement: <h1>404</h1>
  },
  {
    path: "/coffee",
    element: <StepPage />,
  },
  {
    path: "/logout",
    element: <LogoutPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
