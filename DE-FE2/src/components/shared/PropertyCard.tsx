import { getProperty } from "@/types";
import { Link } from "react-router-dom";

function PropertyCard(property: getProperty) {
  return (
    <Link to={`/property/${property._id}`}>
      {/* <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-slate-300 shadow-md w-full max-w-[55rem] lg:flex-row">
        <div className="relative w-full lg:w-2/5 m-0 overflow-hidden text-slate-300 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
          <img
            src={
              property.images[0] ||
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
            }
            alt="card-image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6 w-full bg-black rounded-r-xl">
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {property.propertyTitle || "swam residencia"}
          </h4>
          <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-400">
            {property.locality?.substring(0, 6).concat(" ...") || "Addresss"}
          </p>
          <div className="flex flex-1 justify-around mb-4 text-black">
            <p className="rounded bg-green-200 w-10 text-center">
              {property.typeOfProperty || "flat"}
            </p>
            <p className="rounded bg-red-200 w-10 text-center">
              {property.typo || "rent"}
            </p>
            <p className="rounded bg-blue-200 w-8 text-center">
              {property.bedrooms || "4"}
            </p>
          </div>
          <a href="#" className="inline-block">
            <button
              className="button flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
              type="button"
            >
              Browse
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div> */}
      <div className="max-w-sm mx-auto my-4 bg-black shadow-lg rounded-lg overflow-hidden md:max-w-3xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0 md:w-1/3">
          <img className="h-full w-full object-cover md:w-full" src={property.images[0]} alt={property._id} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{property.typo}</div>
          <p className="block mt-1 text-lg leading-tight font-medium text-white hover:underline">{property.propertyTitle}</p>
          <p className="mt-2 text-slate-50">{property.typeOfProperty}</p>
          <p className="mt-2 text-slate-300">₹{property.price1}  - ₹{property.price2} </p>
          <p className="mt-2 text-slate-200">{property.locality}</p>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default PropertyCard;
