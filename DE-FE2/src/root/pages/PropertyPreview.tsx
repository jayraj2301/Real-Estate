import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Link, useParams } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useGetPropertyById } from "@/lib/react-query/queries";
import Loader from "@/components/shared/Loader";

type routeParams = {
  id: string;
};

export function PropertyPreview() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const { id } = useParams<routeParams>();

  const { data, error, isLoading } = useGetPropertyById(id);
  // console.log(data);

  if (error) {
    return <div className="text-4xl text-red-500">{error.message}</div>;
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    // <div classNameName="overflow-y-auto w-full bg-[#1f1f1f]">
    //   <Carousel
    //     plugins={[plugin.current]}
    //     classNameName="w-full md:max-w-4xl mx-auto"
    //     onMouseEnter={plugin.current.stop}
    //     onMouseLeave={plugin.current.reset}
    //   >
    //     <CarouselContent>
    //       {Array.from({ length: data.data.images.length }).map((_, index) => (
    //         <CarouselItem key={index}>
    //           <Card classNameName="w-full h-auto p-0 rounded">
    //             <CardContent classNameName="flex items-center justify-center p-0">
    //               <img
    //                 src={data.data.images[index]}
    //                 alt="image"
    //                 classNameName="object-contain"
    //               />
    //             </CardContent>
    //           </Card>
    //         </CarouselItem>
    //       ))}
    //     </CarouselContent>
    //     <CarouselPrevious />
    //     <CarouselNext />
    //   </Carousel>
    //   <div classNameName="bg-[#676767] text-white p-4">
    //     <h1 classNameName="text-2xl p-2 mb-2">{data.data.propertyTitle}</h1>
    //     <div classNameName="bg-[#F5F5F5] p-2 rounded flex justify-around mx-1 text-gray-500">
    //       <span classNameName="mx-1">2 Bedrooms</span>|
    //       <span classNameName="mx-1">1 Hall</span>|
    //       <span classNameName="mx-1">Balcony</span>
    //     </div>
    //     <div classNameName="p-6 bg-gray-800 text-white rounded-lg m-3 shadow-md">
    //       <h2 classNameName="text-2xl font-bold mb-4">More Details</h2>
    //       <div classNameName="grid grid-cols-1 text-gray-400 sm:grid-cols-2 gap-4">
    //         <div>
    //           <span classNameName="font-semibold text-white">Price Breakup:</span>{" "}
    //           {data.data.price1}
    //         </div>
    //         <div>
    //           <span classNameName="font-semibold text-white">Address:</span>{" "}
    //           {data.data.locality}
    //         </div>
    //         <div>
    //           <span classNameName="font-semibold text-white">Landmarks:</span>{" "}
    //           {data.data.price2}
    //         </div>
    //         <div>
    //           <span classNameName="font-semibold text-white">Furnishing:</span>{" "}
    //           {data.data.typeOfProperty}
    //         </div>
    //         <div>
    //           <span classNameName="font-semibold text-white">Flooring:</span> {data.data.typo}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-black py-8 overflow-y-auto w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col  -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-auto rounded-lg mb-4">
              <Carousel
                plugins={[plugin.current]}
                className="w-full md:max-w-4xl mx-auto"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {Array.from({ length: data.data.images.length }).map(
                    (_, index) => (
                      <CarouselItem key={index}>
                        <Card className="w-full h-auto p-0 rounded">
                          <CardContent className="flex items-center justify-center p-0">
                            <img
                              src={data.data.images[index]}
                              alt="image"
                              className="object-contain"
                            />
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    )
                  )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              {data.data.propertyTitle}
            </h2>
            <div className="mb-4 text-xl">
              <div className="mb-3">
                <span className="font-bold text-gray-200">Price:</span>
                <span className="text-gray-400">
                  {data.data.price1 + "Rs. -" + data.data.price2 + "Rs."}
                </span>
              </div>
              <div className="mb-3">
                <span className="font-bold text-gray-200">Address:</span>
                <span className="text-gray-400">{data.data.locality}</span>
              </div>
              <div className="mb-3">
                <span className="font-bold text-gray-200">Type:</span>
                <span className="text-gray-400">{data.data.typo}</span>
              </div>
              <div className="mb-3">
                <span className="font-bold text-gray-200">Bedrooms:</span>
                <span className="text-gray-400">{data.data.bedrooms}</span>
              </div>
              <div className="mb-3">
                <span className="font-bold text-gray-200">
                  Type of Property:
                </span>
                <span className="text-gray-400">
                  {data.data.typeOfProperty}
                </span>
              </div>
              <div className="mb-3">
                <span className="font-bold text-gray-200">Area:</span>
                <span className="text-gray-400">{data.data.areaSqft}</span>
              </div>
            </div>
            <h2 className="text-2xl mt-7 font-bold text-white text-center mb-4">
              Contact Details of Owner
            </h2>
            <div className="flex-col mb-4 text-xl">
              <div className="mb-3">
                <span className="font-bold text-gray-200">Name:</span>
                <span className="text-gray-400">
                  {data.data.owner.username}
                </span>
              </div>
              <div className="mb-3">
                <span className="font-bold text-gray-200">Mobile Number:</span>
                <span className="text-gray-400">
                  {data.data.owner.mobile_no}
                </span>
              </div>
              <div className="mb-3">
                <span className="font-bold text-gray-200">E-mail ID:</span>
                <span className="text-gray-400">{data.data.owner.email}</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center -mx-2 mt-8">
              <div className="w-1/3 flex px-2">
                <Link to={"/properties"}>
                  <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-full font-bold hover:bg-purple-800">
                    Browse More Properties
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
