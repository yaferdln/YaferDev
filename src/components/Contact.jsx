import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen p-6 pt-16 flex flex-col items-center justify-center gap-8"
    >
      {/* Card */}
      <div
        className="max-w-3xl w-full p-6 card shadow-lg transition-colors duration-300 flex flex-col md:flex-row items-center gap-6"
        data-aos="fade-up"
      >
        {/* Left Section (Button) */}
        <div className="w-full md:w-1/5 flex justify-center">
          <button
            className="px-4 py-4 md:px-8 text-sm md:text-lg md:font-semibold button shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
            data-aos="zoom"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSe70qGikNwWiwVwRC0UsZ1ZTBIVwR3az7-6_HHO-woaVRoTVA/viewform?usp=header",
                "_blank"
              )
            }
          >
            Let's Work Together
          </button>
        </div>

        {/* Right Section (Contact Details) */}
        <div className="w-full md:w-4/5">
          <h3 className="text-lg md:text-xl font-bold header mg-2 md:mb-4">
            Yafer De Leon
          </h3>
          <p className="text-sm md:text-base">
            <strong>Email:</strong> deleonyafer@gmail.com
          </p>
          <p className="text-sm md:text-base">
            <strong>Mobile:</strong> 09128023499
          </p>
          <p className="text-sm md:text-base">
            <strong>Address:</strong> Quezon City, Philippines
          </p>
        </div>
      </div>

      {/* Interactive Map */}
      <div className="w-full max-w-3xl h-64 rounded-lg overflow-hidden shadow-lg">
        <MapContainer
          center={[14.645121069109344, 120.99317193031311]} // Replace with your latitude and longitude
          zoom={10}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[14.645121069109344, 120.99317193031311]}>
            <Popup>Yafer's Home</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default Contact;
