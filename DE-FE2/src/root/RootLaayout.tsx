import Bottombar from '@/components/shared/Bottombar';
import Leftsidebar from '@/components/shared/Leftsidebar';
import Topbar from '@/components/shared/Topbar';
import { Outlet } from 'react-router-dom';

function RootLaayout() {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <Leftsidebar />

      <section className='flex flex-1 h-screen bg-slate-900'>
        <Outlet />
      </section>

      <Bottombar />
    </div>
  )
}

export default RootLaayout