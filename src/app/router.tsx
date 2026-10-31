import { createBrowserRouter } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>G9 Home</div>,
  },
  {
    path: '*',
    element: <div>404 - Page Not Found</div>,
  },
])

export default router