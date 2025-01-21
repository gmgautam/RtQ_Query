const Footer = () => {
    return (
      <footer className="bg-black text-white py-8 mt-16">
        <div className="container mx-auto px-6 sm:px-12 md:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li className="hover:text-blue-500 transition-all cursor-pointer">Home</li>
                <li className="hover:text-blue-500 transition-all cursor-pointer">Product</li>
                <li className="hover:text-blue-500 transition-all cursor-pointer">Women</li>
                <li className="hover:text-blue-500 transition-all cursor-pointer">Men</li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-sm">Email: support@example.com</p>
              <p className="text-sm">Phone: (123) 456-7890</p>
              <p className="text-sm">Address: 123 Product St, City, Country</p>
            </div>
  
            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-blue-500 hover:text-blue-700 transition-all">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700 transition-all">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700 transition-all">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700 transition-all">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
  
            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
              <form>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 mb-4 rounded-lg border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="mt-12 text-center">
            <p className="text-sm">&copy; 2025 Product. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  