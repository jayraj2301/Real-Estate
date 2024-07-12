import { useUserContext } from '@/context/AuthContext';
import {Outlet,Navigate} from 'react-router-dom';

function AuthLayout() {

  const {isAuthenticated} = useUserContext()

  return (
    <>
      {isAuthenticated ? <Navigate to={"/"} /> : 
        <>
          <section className='flex flex-1 justify-center items-center flex-col'>
            <Outlet />
          </section>
          <img
            src='/assets/building.jpg'
            alt='apartment'
            className='hidden xl:block h-screen w-1/2 object-cover bg-no-repeat'
          />
        </>
      }
    </>
  )
}

export default AuthLayout