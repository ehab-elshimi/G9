import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from '../../lib/queryClient'
import { RouterProvider } from 'react-router'
import router from '../router'

function AppProviders() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  )
}
export default AppProviders
