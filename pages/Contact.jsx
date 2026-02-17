import React from "react";

const Contact = () => {
  return (
    <section className="w-full min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Side Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Contact Us
          </h2>

          <p className="mt-4 text-gray-600">
            Have questions or need support? We're here to help. 
            Fill out the form and our team will get back to you as soon as possible.
          </p>

          <div className="mt-6 space-y-3 text-gray-700">
            <p>📍 Location: Karachi, Pakistan</p>
            <p>📧 Email: support@freshmart.com</p>
            <p>📞 Phone: +92 300 1234567</p>
          </div>
        </div>

        {/* Right Side Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
