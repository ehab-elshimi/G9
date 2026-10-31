import Sidebar from './Sidebar'
import { Outlet } from 'react-router'

function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 px-6 py-4">
        <h1 className="text-xl font-bold">G9</h1>
      </header>

      <div className="flex min-h-[calc(100vh-65px)]">
        <Sidebar />

        <main className="min-w-0 flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout
