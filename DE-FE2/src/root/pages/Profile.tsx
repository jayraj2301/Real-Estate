import { useEffect, useState } from "react";
import userCover from "/assets/Designer (3).png";
import { useUserContext } from "@/context/AuthContext";
// import { useGetUserProperties } from "@/lib/react-query/queries";
import service from "@/lib/server/helper";
import { Link } from "react-router-dom";
import { getProperty } from "@/types";

const Profile = () => {
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const { user } = useUserContext();
  // const {data,error,isLoading} = useGetUserProperties()
  const [data,setData] = useState<getProperty>()
  const fetch = async()=>{
    const d = await service.getUserProperties()
    setData(d)
  }

  useEffect(()=>{
    fetch()
  },[])
  const toggleDropdown2 = () => {
    setDropdown2Open(!dropdown2Open);
  };

  // if(isLoading) return <>Loading...</>
  // if(error) return <>{error.message}</>
  console.log(data);

  return (
    <section className="w-full overflow-hidden bg-black overflow-y-auto">
      <div className="flex flex-col">
        {/* Cover Image */}
        <img
          src={userCover}
          alt="User Cover"
          className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]"
        />

        {/* Profile Image */}
        <div className="sm:w-[80%] xs:w-[90%] mx-auto flex">
          <span className="text-9xl text-center rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-white relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]">
            {user.username.toUpperCase().charAt(0) || "U"}
          </span>
          {/* FullName */}
          <h1 className="w-full text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
            {user.username}
          </h1>
        </div>

        <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
          {/* Detail */}
          <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
            <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
              
              <div className="w-full">
                <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                  <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      Last Name
                    </dt>
                    <dd className="text-lg font-semibold">Abera</dd>
                  </div>
                  <div className="flex flex-col pt-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      Email
                    </dt>
                    <dd className="mb-2 text-lg font-semibold">{user.email}</dd>
                  </div>
                  <div className="flex flex-col pt-3">
                    <button
                      onClick={toggleDropdown2}
                      className="text-gray-400 bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg md:text-lg text-center inline-flex items-center dark:bg-black dark:hover:bg-black dark:focus:ring-black"
                      type="button"
                    >
                      Your Properties
                      <svg
                        className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>

                    {/* Dropdown menu */}
                    {dropdown2Open && (
                      <div className="z-10 rounded-lg shadow w-full bg-gray-900">
                        <ul className="h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200">
                          {data.map((d,i)=>(
                            <li key={i}>
                            <Link
                              to={`/property/${data._id}`}
                              className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              {data.propertyTitle}
                            </Link>
                          </li>
                          ))}
                          
                          
                        </ul>
                      </div>
                    )}
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
