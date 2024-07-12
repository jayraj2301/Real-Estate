import Loader from "@/components/shared/Loader"
import PropertyCard from "@/components/shared/PropertyCard"
import { useGetProperties } from "@/lib/react-query/queries"
import { getProperty } from "@/types";
import React from "react";

function Properties() {

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status
  } = useGetProperties()

  // console.log(data);
  
  

  if (status==="pending") {
    <div className="flex justify-center items-center">
      <Loader />
    </div>
  }

  if (status==="error") {
    <h1 className="text-center text-3xl text-red-500">{error.message || "Something went wrong to fetching properties"}</h1>
  }

  return (
    // <div className="overflow-y-scroll flex flex-col flex-1 items-center pt-5 pb-8 px-8 md:px-12 gap-5">
    <div className="container mx-auto p-4 overflow-y-auto">
      {
        // data?.pages[0].data.properties.map((page,i)=>(
        //   <PropertyCard {...page} key={i}  />
        // ))
        data?.pages.map((page,pageInd)=>(
          <React.Fragment key={pageInd}>
            {page.data.properties.map((property:getProperty) => (
              <PropertyCard {...property} key={property._id} />
          ))}
          </React.Fragment>
        ))
      }
      <div className="flex justify-center">
      <button
      onClick={()=>fetchNextPage()}
      disabled= {!hasNextPage || isFetchingNextPage}
      className={`p-2 bg-blue-500 text-white rounded ${!hasNextPage ? "cursor-not-allowed" : "cursor-pointer"}`}
      >
        {isFetchingNextPage
                    ? 'Loading more...'
                    : hasNextPage
                    ? 'Load More'
                    : 'No more properties'}
      </button>
      </div>
      <div className="text-center">
        {isFetching && !isFetchingNextPage ? "Fetching..." : null}
      </div>
    </div>
  )
}

export default Properties