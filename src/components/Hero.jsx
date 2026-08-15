import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <span className="inline-block bg-indigo-50 text-indigo-600 text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Welcome to the Future
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-none">
              Build amazing things <br />
              <span className="text-indigo-600">faster than ever.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Streamline your workflow, boost productivity, and bring your ideas to life with our powerful platform designed for modern creators.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#get-started"
                className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 shadow-md transition-all duration-200"
              >
                Get Started
              </a>
              <a
                href="#learn-more"
                className="inline-flex justify-center items-center px-8 py-3.5 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Column: Hero Image / Illustration Placeholder */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-2xl shadow-2xl p-8 flex items-center justify-center min-h-[350px]">
              <div className="text-center text-white space-y-2">
                <svg
                  className="mx-auto h-16 w-16 opacity-80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-sm font-medium opacity-90">Hero Image / Illustration</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;