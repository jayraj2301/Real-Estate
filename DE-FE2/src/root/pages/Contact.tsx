function Contact() {
  return (
    <div className="bg-black text-gray-100 px-8 py-12 overflow-y-scroll custom-scrollbar">
        <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-black text-white rounded-lg shadow-lg">
        <div className="flex flex-col justify-between">
            <div>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Do you have any problem?</h2>
                <div className="text-gray-700 mt-8">
                    <p>If you have any questions or need assistance, feel free to reach out to us using the form</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-between">
            <form action="#" method="post" className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-lg pb-2 font-medium text-white">Your Name</label>
                    <input type="text" id="name" name="name" placeholder="abc" className="mt-1 p-2 w-full bg-gray-900 border rounded-md focus:outline-none focus:ring focus:ring-blue-200" required />
                </div>
                <div>
                    <label htmlFor="email" className="block text-lg py-2 font-medium text-white">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="abc@xyz.com" className="mt-1 p-2 bg-gray-900 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-200" required />
                </div>
                <div>
                    <label htmlFor="message" className="block text-lg py-2 font-medium text-white">Your Message</label>
                    <textarea id="message" name="message" rows={4} placeholder="Type your message here..." className="mt-1 p-2 w-full border bg-gray-900 rounded-md focus:outline-none focus:ring focus:ring-blue-200" required></textarea>
                </div>
                <div>
                    <button type="button" className="bg-purple-600 mt-2 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition duration-300 ease-in-out">Send Message</button>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Contact