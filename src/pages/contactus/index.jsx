import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-[1224px] mx-auto py-[40px] px-[16px] xl:px-0">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
        If you have any questions, inquiries, or issues, feel free to reach out to us.
        Our support team will get back to you within 24 hours.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Get in Touch</h2>
          <p className="text-gray-700">
            <strong>Email:</strong> support@example.com
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> +1 (234) 567-890
          </p>
          <p className="text-gray-700">
            <strong>Address:</strong> 123 Market Street, New York, USA
          </p>
          <p className="text-gray-600">
            Our team is available Monday to Friday, 9:00 AM – 6:00 PM.
          </p>
        </div>
        <form className="space-y-4 bg-white p-6 rounded-xl shadow">
          <div>
            <label className="block font-medium mb-1">Your Name</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email Address</label>
            <input
              type="email"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              className="w-full border rounded-lg px-3 py-2 h-32 resize-none focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Write your message"
            ></textarea>
          </div>
          <button className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700 transition text-white py-2 rounded-lg font-medium">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
