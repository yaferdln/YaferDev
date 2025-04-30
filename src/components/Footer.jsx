import { socialLinks } from "../constants/socialLinks";

const Footer = () => {
  return (
    <footer className="py-6 max-w-6xl mx-auto">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="header text-3xl md:font-bold mb-4 md:mb-0">
              YaferDev
            </h2>
            <p className="text-xs md:text-sm">
              Building the web, one line of code at a time.
            </p>
          </div>
          {/* Social Media Links */}
          <div className="flex gap-6 md:gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl ${link.colorClass}`}
              >
                <i className={link.iconClass}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-xs md:text-sm">
          <p>&copy;{new Date().getFullYear()} YaferDev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
