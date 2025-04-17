import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      platform: "Facebook",
      url: "https://www.facebook.com/yaferdeleon",
      iconClass: "bx bxl-facebook",
      colorClass: "hover:text-blue-600",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/yaferdln/",
      iconClass: "bx bxl-instagram",
      colorClass: "hover:text-pink-500",
    },
    {
      platform: "Twitter",
      url: "https://x.com/yafercrypto",
      iconClass: "bx bxl-twitter",
      colorClass: "hover:text-blue-500",
    },
    {
      platform: "GitHub",
      url: "https://github.com/yaferdln",
      iconClass: "bx bxl-github",
      colorClass: "hover:text-gray-800 md:dark:hover:text-white",
    },
    {
      platform: "TikTok",
      url: "https://www.tiktok.com/@yafercrypto",
      iconClass: "bx bxl-tiktok",
      colorClass: "hover:text-black",
    },
  ];

  return (
    <footer className="py-8">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl md:font-bold mb-4 md:mb-0 header transition-colors duration-300">
              YaferDev
            </h2>
            <p className="text-xs md:text-sm">
              Building the web, one line of code at a time.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6 md:gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.colorClass} text-2xl link hover:scale-150 transition-transform cursor-pointer`}
                aria-label={link.platform}
              >
                <i className={`${link.iconClass} text-xl md:text-2xl`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-xs md:text-sm">
          <p>
            &copy; {new Date().getFullYear()} YaferDev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
