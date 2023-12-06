import React from "react";
import GoogleMap from "./GoogleMap";

const ContactUs: React.FC = () => {
  return (
    <div className="container">
      {" "}
      <img
        src="/assets/images/contact.webp"
        alt="Descriptive alt text"
        className="w-full h-full object-cover  shadow-lg mb-8"
      />
      <div className="bg-blue-100 gap-8 py-10   mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-24 flex items-center max-md:flex-col justify-between">
        <div className="   max-w-2xl">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

          {/* Subtitle */}
          <h2 className="text-2xl mb-4">Contact Information</h2>

          {/* Phone numbers */}
          <div className="mb-4">
            <span className="block text-lg font-semibold mb-1">Phone:</span>
            <p className="mb-2"> (214) 929 – 2796</p>
            <p> (612) 644 - 7979</p>
          </div>

          {/* Email */}
          <div className="mb-4">
            <span className="block text-lg font-semibold mb-1">Email:</span>
            <a
              href="mailto:contact@waamoreliefdevelopment.org"
              className="text-blue-600 underline"
            >
              contact@waamoreliefdevelopment.org
            </a>
          </div>

          {/* Address */}
          <div>
            <span className="block text-lg font-semibold mb-1">Address:</span>
            <address>
              817 Vandalia St Unit#3, St Paul, Minnesota, United States 55114
            </address>
          </div>
        </div>
        <div><img src="/assets/images/image1.jpg" alt="" /></div>
      </div>
      <GoogleMap/>
    </div>

  );
};

export default ContactUs;
