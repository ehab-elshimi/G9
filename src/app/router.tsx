import { createBrowserRouter } from 'react-router'
import AppLayout from '../components/layouts/AppLayout'
import DashboardPage from '../pages/admin/DashboardPage'
import ProductsPage from '../pages/admin/ProductsPage'
import SettingsPage from '../pages/admin/SettingsPage'
import NotFoundPage from '../pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage/>,
      },
      {
        path: 'products',
        element: <ProductsPage/>,
      },
      {
        path: 'settings',
        element: <SettingsPage/>,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage/>,
  },
])

export default router