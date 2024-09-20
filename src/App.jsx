import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import data from "./data.json";

function App() {
  const [profileData, setProfileData] = useState({});
  const [socialLinks, setSocialLinks] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setProfileData(data.profile);
    setSocialLinks(data.socialLinks);
    setRows(data.rows);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="flex flex-col items-center mb-6">
        <div className="flex justify-between w-full max-w-md px-4 mb-4">
          {profileData.buttons &&
            profileData.buttons.map((button, index) => (
              <button
                key={index}
                className="bg-gray-800 text-white px-4 py-2 rounded-full"
              >
                {button.icon && <i className={button.icon}></i>} {button.text}
              </button>
            ))}
        </div>

        <img
          className="w-24 h-24 rounded-full mb-4"
          src={profileData.image}
          alt="Profile"
        />

        <h1 className="text-xl font-bold">{profileData.name}</h1>
        <p className="flex items-center text-gray-400">
          <i className="fas fa-map-marker-alt mr-1.5"></i>{" "}
          {profileData.location}
        </p>
      </div>

      <div className="flex justify-center space-x-4 mb-8">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} className="text-white text-2xl">
            <i className={link.icon}></i>
          </a>
        ))}
      </div>

      <div className="space-y-8">
        {rows.map((row, index) => (
          <div
            key={index}
            className="flex items-center space-x-1 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ml-2"
          >
            <img
              src={row.image}
              alt="Icon"
              className={`w-10 h-10 object-contain ${
                index === 0 ? "rounded-full w-12 h-12" : ""
              }`}
            />
            <div className="flex-1 flex flex-col justify-center items-center text-center ">
              <p className="text-lg font-semibold m-0 p-0 -ml-10">
                {row.title}
              </p>
              <p className="text-gray-400 m-0 p-0 -ml-10">{row.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
