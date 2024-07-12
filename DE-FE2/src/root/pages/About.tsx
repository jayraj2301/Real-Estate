function About() {
  return (
    <div className='bg-black overflow-auto custom-scrollbar'>
        <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 justify-center items-center">
            <div className="md:w-1/2">
                <img src="assets/Designer (3).png" alt="buildingImage" className="rounded-lg shadow-md" />
            </div>
            <div className="md:w-1/2">
                <p className="text-white leading-relaxed">
                    At UrbanNestings, We are your partners in finding the
                    perfect home. With over a decade of experience, our team of passionate professionals is committed to
                    excellence.
                </p>
                <p className="text-white leading-relaxed mt-4">
                    Our core values—transparency, integrity, and personalized attention—guide every interaction. Whether
                    you are buying, selling, or renting, we are here to make your real estate journey seamless and
                    rewarding.
                </p>
            </div>
        </div>

        <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                <div>
                    <h2 className="text-2xl pt-36 font-semibold text-white pb-3">Our Values</h2>
                </div>
                <div className="bg-gray-900 rounded-lg shadow-md p-6">
                    <div className="flex justify-center items-center">
                        <img src="assets/star.jpeg" alt="quality" className="rounded-full w-10 h-10 mr-4 " />
                        <h3 className="text-lg font-semibold text-white">Quality</h3>
                    </div>
                    <p className="text-gray-500 pt-5">We uphold high standards in everything we offer. From property listings to customer service, quality is non-negotiable.</p>
                </div>
                <div className="bg-gray-900 rounded-lg shadow-md p-6">
                    <div className="flex justify-center items-center">
                        <img src="assets/cap.jpeg" alt="excellence" className="rounded-full w-10 h-10 mr-4 " />
                        <h3 className="text-lg font-semibold text-white">Excellence</h3>
                    </div>
                    <p className="text-gray-500 pt-5">We set the bar high for ourselves. From the properties we list to the services we provide.</p>
                </div>
                <div >
                    <h5 className="text-white">Our commitment lies in creating a platform that simplifies property dealings, making them transparent, efficient, and cost-effective.</h5>
                </div>
                <div className="bg-gray-900 rounded-lg shadow-md p-6">
                    <div className="flex justify-center items-center">
                        <img src="assets/user.jpeg" alt="client" className="rounded-full w-10 h-10 mr-4 "/>
                        <h3 className="text-lg font-semibold text-white">Client-Centric</h3>
                    </div>
                    <p className="text-gray-500 pt-5">Clients are our first priority, we listen and understand your needs.</p>
                </div>
                <div className="bg-gray-900 rounded-lg shadow-md p-6">
                    <div className="flex justify-center items-center">
                        <img src="assets/star.jpeg" alt="transparency" className="rounded-full w-10 h-10 mr-4 "/>
                        <h3 className="text-lg font-semibold text-white">Transparency</h3>
                    </div>
                    <p className="text-gray-500 pt-5">We believe in openness and honesty. Our commitment to transparency ensures that all parties involved in a property transaction have access to accurate information.</p>
                </div>
            </div>
        </div>

        <div className="mt-12">
            <h2 className="text-2xl font-semibold text-white">What Our Users Say</h2>
            <div className="mt-6">
                <div className="bg-gray-900 rounded-lg shadow-md p-6">
                    <p className="text-white italic">UrbanNestings made selling my home stress-free. Highly recommended!
                    </p>
                    <p className="text-gray-500 mt-2">— Satisfied Customer</p>
                </div>
            </div>
            <div className="mt-6">
                <div className="bg-gray-900 rounded-lg shadow-md p-6">
                    <p className="text-white italic">Intuitive User-Interface makes searching property hassle free.
                    </p>
                    <p className="text-gray-500 mt-2">— Satisfied Customer</p>
                </div>
            </div>
            <div className="mt-6">
                <div className="bg-gray-900 rounded-lg shadow-md p-6">
                    <p className="text-white italic">Property prices are great!
                    </p>
                    <p className="text-gray-500 mt-2">— Satisfied Customer</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About