import { useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { useSignOutAccount } from '@/lib/react-query/queries'
import { useUserContext } from '@/context/AuthContext'
import { sidebarLinks } from '@/constants'
import {NavLinks} from '@/types/';

function Leftsidebar() {
  const {pathname} = useLocation()
  const navigate = useNavigate()
  const {mutate: signOut, isSuccess} = useSignOutAccount()
  const {user} = useUserContext()

  useEffect(()=>{
    if (isSuccess) {
      navigate("/sign-in")
    }
  },[isSuccess,navigate])
  return (
    <nav className='hidden px-8 pb-4 md:flex bg-[#09090A] flex-col justify-between min-w-[270px]'>
      <div className='flex flex-col gap-5'>
        <Link to={"/"} className='flex items-center justify-center'>
          <img 
            src='assets/realestate.png'
            alt='logo'
            width={130}
            height={15}
          />
        </Link>
        <Link to={`/profile/${user.id}`} className='flex gap-3 items-center'>
          <span className='rounded-full h-14 w-14 bg-red-400 flex justify-center items-center'>
              {user.username.toUpperCase().charAt(0) || "U"}
          </span>
          <div className='flex flex-col'>
            <p className='font-bold text-lg'>{user.username || "Hello"}</p>
            <p className='text-slate-400 text-sm'>{user.email || "xyz@gmai.com"}</p>
          </div>
        </Link>
        <ul className='flex flex-col gap-4'>
          {
            sidebarLinks.map((link: NavLinks) => {
              const isActive = pathname === link.route

              return (
                <li
                key={link.label}
                className={`rounded-lg text-[16px] group font-medium leading-[140%]
                 hover:bg-[#877EFF] transition ${isActive && "bg-[#877EFF]"}`}
                >
                  <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4"
                  >
                    <img 
                      src={link.imgUrl}
                      alt={link.label}
                      width={30}
                      height={30}
                      className={`group-hover:invert-white ${
                        isActive && "invert-white"
                      }`}
                    />
                    {link.label}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </div>
      <Button 
          variant={'ghost'}
          className='flex gap-4 p-8 items-center justify-start hover:bg-transparent hover:bg-[#fc5d57] hover:text-white'
          onClick={()=>signOut()}
          >
            <img 
              src='assets/logout.svg' 
              alt='logout'
              width={30}
              height={30}
            />
            <p>Logout</p>
      </Button>
    </nav>
  )
}

export default Leftsidebar