import { useState } from 'react';

const Navbar = () => {
  // State for handling the dropdown visibility
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      <div className="flex justify-between items-center bg-black text-white py-4 px-6 shadow-md">
        {/* Logo or Brand Name */}
        <h1 className="text-3xl font-bold tracking-wider hover:text-gray-300 cursor-pointer">
          Product
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:block">
          <ul className="flex gap-8 items-center">
            <li className="hover:text-blue-500 transition-all cursor-pointer">Home</li>
            <li
              className="relative group"
              onMouseEnter={handleDropdownToggle}
              onMouseLeave={handleDropdownToggle}
            >
              <span className="hover:text-blue-500 transition-all cursor-pointer">Product</span>
              {/* Dropdown Menu */}
              {isDropdownVisible && (
                <div className="absolute left-0 right-10 mt-2 w-screen bg-black text-white rounded-lg shadow-lg p-4 z-10">
                  <ul className="w-[100%]">
                    <li className="py-2 hover:bg-blue-500 transition-all cursor-pointer">Electronics</li>
                    <li className="py-2 hover:bg-blue-500 transition-all cursor-pointer">Fashion</li>
                    <li className="py-2 hover:bg-blue-500 transition-all cursor-pointer">Home & Garden</li>
                    <li className="py-2 hover:bg-blue-500 transition-all cursor-pointer">Sports</li>
                  </ul>
                </div>
              )}
            </li>
            <li className="hover:text-blue-500 transition-all cursor-pointer">Women</li>
            <li className="hover:text-blue-500 transition-all cursor-pointer">Men</li>
          </ul>
        </div>

        {/* Login Button */}
        <button className="py-2 px-8 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold hover:bg-blue-600 transition-all duration-300">
          Login
        </button>
      </div>

      {/* Mobile Responsive Navigation */}
      <div className="md:hidden bg-black text-white py-4 px-6">
        <button
          className="text-xl font-semibold text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
        {isMobileMenuOpen && (
          <div className="mt-4 space-y-4">
            <ul>
              <li className="py-2 hover:bg-blue-500 transition-all cursor-pointer">Home</li>
              <li className="py-2 hover:bg-blue-500 transition-all cursor-pointer">Product</li>
              <li className="py-2 hover:bg-blue-500 transition-all cursor-pointer">Women</li>
              <li className="py-2 hover:bg-blue-500 transition-all cursor-pointer">Men</li>
            </ul>
            {/* Mobile Dropdown Menu */}
            <div className="mt-4 space-y-2">
              <ul>
                <li className="py-2 hover:bg-blue-500 transition-all cursor-pointer">Electronics</li>
                <li className="py-2 hover:bg-blue-500 transition-all cursor-pointer">Fashion</li>
                <li className="py-2 hover:bg-blue-500 transition-all cursor-pointer">Home & Garden</li>
                <li className="py-2 hover:bg-blue-500 transition-all cursor-pointer">Sports</li>
              </ul>
            </div>
            <button className="w-full py-2 mt-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold hover:bg-blue-600 transition-all">
              Login
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
