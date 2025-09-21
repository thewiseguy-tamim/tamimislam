import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="mx-auto">
        

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Tamim Islam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;