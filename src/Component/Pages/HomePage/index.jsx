const Homepage = () => {
    return (
      <>
        <div className="relative w-full h-[90vh] overflow-hidden">
          <img
            src="https://www.thelist.com/img/gallery/the-best-clothing-stores-for-your-age/l-intro-1663675500.jpg"
            alt="Shopping Background"
            className="object-cover w-full h-full opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
  
          <div className="absolute bottom-16 left-1/4 w-[50%] text-center p-6 sm:p-8 bg-white bg-opacity-40 backdrop-blur-lg rounded-lg shadow-lg">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gradient bg-clip-text font-extrabold tracking-wide drop-shadow-lg">
              Your One-Stop Shop for Everything You Need
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white font-light">
              Discover the best deals and latest trends in clothing, electronics, and more, all in one place.
            </p>
          </div>
        </div>
      </>
    );
  };
  
  export default Homepage;
  