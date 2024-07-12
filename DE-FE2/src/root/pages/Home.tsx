import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="overflow-y-auto w-full">
      <div
        className=" w-full bg-center h-screen flex flex-col items-center justify-center object-contain bg-[#ff99e4]"
        style={{ backgroundImage: `url(/assets/grad.png)` }}
      >
        <div className="text-white w-full text-center p-8">
          <h1 className="text-4xl lg:text-6xl text-center font-bold mb-4">
            Discover Your Dream Property
          </h1>
          <p className="text-sm md:text-lg lg:text-2xl text-center">
            Your journey to finding the perfect home begins here.
          </p>
        </div>
        <div className="w-full my-5 flex justify-center">
          <Link to={"/properties"}>
            <button className="p-3 bg-[#877EFF] hover:bg-[#7066ff] rounded">
              Browse Properties
            </button>
          </Link>
        </div>
        <div className="w-full flex gap-10 justify-center mt-8">
          <div className="border rounded p-6 w-1/5">
            <p className="text-xl mb-1">200+</p>
            <p className="text-sm">Happy users</p>
          </div>
          <div className="border rounded p-6 w-1/5">
            <p className="text-xl mb-1">10k +</p>
            <p className="text-sm">Properties for client</p>
          </div>
          <div className="border rounded p-6 w-1/5">
            <p className="text-xl mb-1">1+</p>
            <p className="text-sm">Years of experience</p>
          </div>
        </div>
      </div>
      <div className="h-screen p-8">
        <h1 className="text-3xl m-2">Featured Properties</h1>
        <p className="text-lg mb-6">
          Explore our handpicked selection of featured properties
        </p>
        <div className="border rounded p-3">
          <Link to={"/properties"}>
        <div className="p-3 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="h-auto p-8 m-5 sm:w-auto rounded-lg bg-black border border-gray-700">
            <div className="mb-2">
              <img
                className="w-full rounded-lg object-cover"
                src={
                  "https://cdn.pixabay.com/photo/2023/05/30/17/25/door-8029228_640.jpg"
                }
                alt="image"
              />
            </div>
            <div className="w-full text-slate-50">
              <h3 className="p-2 text-2xl">Silver Grand</h3>
              <p className="p-1">Near Pakwan Cross Road</p>
              <h4 className="p-1 mb-3">
                <span className="text-slate-200">Price:</span> 50,00,000 - 70,00,000
              </h4>
              <button className="p-3 bg-[#877EFF] hover:bg-[#7066ff] rounded">
              Browse
            </button>
            </div>
          </div>
          <div className="h-auto p-8 m-5 sm:w-auto rounded-lg bg-black border border-gray-700">
            <div className="mb-2">
              <img
                className="w-full rounded-lg object-cover"
                src={
                  "https://cdn.pixabay.com/photo/2015/05/19/12/27/house-773527_640.jpg"
                }
                alt="image"
              />
            </div>
            <div className="w-full text-slate-50">
              <h3 className="p-2 text-2xl">Lotus Bunglows</h3>
              <p className="p-1">Vastral cross road</p>
              <h4 className="p-1 mb-3">
                <span className="text-slate-200">Price:</span> 75,00,000 - 90,00,000
              </h4>
              <button className="p-3 bg-[#877EFF] hover:bg-[#7066ff] rounded">
              Browse
            </button>
            </div>
          </div>
          <div className="h-auto p-8 m-5 sm:w-auto rounded-lg bg-black border border-gray-700">
            <div className="mb-2">
              <img
                className="w-full rounded-lg object-cover"
                src={
                  "https://cdn.pixabay.com/photo/2017/03/30/04/14/house-2187170_640.jpg"
                }
                alt="image"
              />
            </div>
            <div className="w-full text-slate-50">
              <h3 className="p-2 text-2xl">Grand Elegance</h3>
              <p className="p-1">Iskcon cross road</p>
              <h4 className="p-1 mb-3">
                <span className="text-slate-200">Price:</span> 85,00,000 - 95,00,000
              </h4>
              <button className="p-3 bg-[#877EFF] hover:bg-[#7066ff] rounded">
              Browse
            </button>
            </div>
          </div>
        </div>
        </Link>
        </div>
      </div>
      <div className="bg-gray-900 m-4">
      <div className="max-w-6xl mx-auto px-4 border rounded py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-black p-6 rounded-lg shadow-md">
            <div className="text-yellow-500 text-2xl mb-4">★★★★★</div>
            <p className="text-slate-600 mb-4">
              Our experience with UrbanNesting was outstanding. They provided us
              with top-notch service.
            </p>
            <p className="text-slate-600">- Wade Warren, USA, California</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-black p-6 rounded-lg shadow-md">
            <div className="text-yellow-500 text-2xl mb-4">★★★★★</div>
            <p className="text-slate-600 mb-4">
              UrbanNesting helped us sell our property quickly and at a great price.
              We couldn't be happier with the results.
            </p>
            <p className="text-gray-600">- Emelie Thomson, USA, Florida</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-black p-6 rounded-lg shadow-md">
            <div className="text-yellow-500 text-2xl mb-4">★★★★★</div>
            <p className="text-slate-600 mb-4">
              The UrbanNesting team guided us through the entire buying process.
              Their knowledge and commitment to our needs were impressive.
            </p>
            <p className="text-gray-600">- John Mans, USA, Nevada</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
