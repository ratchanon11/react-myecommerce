import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm p-6 mt-10 border-t border-gray-700 text-center">
      <p className="font-dark text-glow-purple">© Adview | mai sa nid bid mode </p>
      <div className="flex justify-center gap-4 mt-2 text-lg">
        {["FB", "IG", "Twitter"].map((social, idx) => (
          <a
            key={idx}
            href="#"
            className="hover:text-cyan-400 transform hover:scale-125 transition font-dark"
          >
            {social}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
