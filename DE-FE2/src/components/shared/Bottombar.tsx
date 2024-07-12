
import { sidebarLinks } from '@/constants'
import { Link, useLocation } from 'react-router-dom'

function Bottombar() {

  const {pathname} = useLocation()

  return (
    <section className='flex md:hidden w-full sticky bottom-0 justify-between items-center bg-[#09090A] z-50 rounded-t-[20px] px-5 py-4'>
      {
        sidebarLinks.map((link)=>{
          const isActive = pathname === link.route;
          return (
            <Link
            key={link.label}
            to={link.route}
            className={`${isActive && "rounded-[10px] bg-[#877EFF]"}
            flex justify-center items-center gap-1 flex-col p-2 transition
            `}
            >
              <img
                src={link.imgUrl}
                alt={link.label}
                width={16}
                height={16}
                className={`${isActive && "invert-white"}`}
              />
              <p className={`text-[0.60rem] text-slate-400 ${isActive && "text-white"}`}>{link.label}</p>
            </Link>
          )
        })
      }
    </section>
  )
}

export default Bottombar