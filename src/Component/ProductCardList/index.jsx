/* eslint-disable react/prop-types */
const ProductList = ({ data = [] }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data?.map((product) => {
          const { id, price, rating, title, image } = product;
          return (
            <div
              key={id}
              className="relative group bg-white rounded-xl shadow-2xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl"
            >
              {/* Product Image with Hover Effect */}
              <div className="relative w-full h-80">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500 ease-in-out"
                />
                {/* Product Details (visible on hover) */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white p-6">
                  <h3 className="text-2xl font-semibold text-center">{title}</h3>
                  <p className="text-lg font-bold">${price}</p>
                  <p className="text-sm">
                    Rating: {rating.rate} ({rating.count} reviews)
                  </p>
                </div>
              </div>
  
              {/* Footer with price and more details */}
              <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-b-xl">
                <button className="w-full bg-transparent text-white py-2 px-4 rounded-lg border-2 border-transparent group-hover:border-white hover:bg-blue-700 transition duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default ProductList;
  