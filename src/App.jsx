import { Footer, Homepage, Navbar, ProductList } from '@/Component';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from './Component/store/slices/productSlice';

function App() {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.product.data);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  // Skeleton loader effect when the data is not yet available
  if (isLoading || !data) {
    return (
      <div className="min-h-screen bg-gray-100 animate-pulse">
        {/* Skeleton for Navbar */}
        <div className="w-full h-16 bg-gray-300 mb-8"></div> {/* Placeholder for Navbar */}

        {/* Skeleton for Hero Section */}
        <div className="w-full h-[40vh] bg-gray-300 mb-8"></div> {/* Placeholder for Hero Image */}
        <div className="w-3/4 h-6 bg-gray-300 mb-4 mx-auto"></div> {/* Placeholder for Hero Heading */}
        <div className="w-1/2 h-4 bg-gray-300 mb-8 mx-auto"></div> {/* Placeholder for Hero Description */}

        {/* Skeleton for Product List */}
        <div className="p-6 sm:p-12 bg-gray-50">
          <h2 className="w-1/2 h-6 bg-gray-300 mb-8 mx-auto"></h2> {/* Placeholder for Section Title */}
          <div className="space-y-8">
            {/* Skeleton Product Cards */}
            <div className="w-64 h-80 bg-gray-300 animate-pulse rounded-lg shadow-md"></div>
            <div className="w-64 h-80 bg-gray-300 animate-pulse rounded-lg shadow-md"></div>
            <div className="w-64 h-80 bg-gray-300 animate-pulse rounded-lg shadow-md"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Welcome to Our Shopping Paradise</h1>
        <p className="mt-4 text-lg sm:text-xl">Explore a wide range of products tailored just for you. Find the best deals and shop with ease!</p>
      </section>

      <Homepage />

      <main className="p-6 sm:p-12 bg-gray-50">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-900">Our Featured Products</h2>
        <ProductList data={data} />
      </main>
      <Footer/>
    </>
  );
}

export default App;
