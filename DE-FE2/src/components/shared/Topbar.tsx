import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { useSignOutAccount } from '@/lib/react-query/queries'
import { useUserContext } from '@/context/AuthContext'

function Topbar() {

  const navigate = useNavigate()
  const {mutate: signOut, isSuccess} = useSignOutAccount()
  const {user} = useUserContext()

  useEffect(()=>{
    if (isSuccess) {
      console.log(isSuccess);
      
      navigate("/sign-in")
    }
  },[isSuccess,navigate])

  return (
    <section className='w-full sticky top-0 z-50 md:hidden bg-[#09090A]'>
      <div className='flex justify-between items-center py-3 px-5'>
        <Link to={"/"} className='flex gap-3 items-center'>
          <img 
            src='assets/realestate.png'
            alt='logo'
            width={80}
            height={15}
          />
        </Link>
        <div className='flex items-center gap-4'>
          <Button 
          variant={'ghost'}
          className='flex gap-4 items-center justify-start hover:bg-transparent hover:text-white'
          onClick={()=>signOut()}
          >
            <img 
              src='assets/logout.svg' 
              alt='logout'
            />
          </Button>
          <Link to={`/profile/${user.id}`}>
            <span className='rounded-full text-xl'>
              {user.username.toUpperCase().charAt(0) || "U"}
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Topbar