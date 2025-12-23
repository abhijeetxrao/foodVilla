import React from "react";

export const ShimmerUI= () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-10">
      {/* Search Bar Placeholder */}
      <div className="flex flex-col items-center mb-12 gap-4">
        <div className="h-14 w-full max-w-lg bg-gray-200 rounded-full animate-pulse"></div>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Array(8).fill("").map((_, index) => (
          <div key={index} className="flex flex-col gap-4">
            {/* Image Placeholder */}
            <div className="w-full aspect-[4/3] bg-gray-200 rounded-2xl animate-pulse"></div>
            {/* Title Placeholder */}
            <div className="h-6 w-3/4 bg-gray-200 rounded-md animate-pulse"></div>
            {/* Subtitle Placeholder */}
            <div className="h-4 w-1/2 bg-gray-100 rounded-md animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const AboutShimmer = () => {
  return (
    <div className="min-h-screen bg-white">

      <div className="h-[400px] bg-gray-200 animate-pulse flex flex-col items-center justify-center space-y-4 px-4">
        <div className="h-12 w-2/3 md:w-1/2 bg-gray-300 rounded-lg"></div>
        <div className="h-12 w-1/2 md:w-1/3 bg-gray-300 rounded-lg"></div>
        <div className="h-6 w-3/4 md:w-2/3 bg-gray-300 rounded-lg"></div>
      </div>

  
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 space-y-4">
              <div className="h-12 w-12 bg-gray-200 rounded-full animate-pulse mx-auto"></div>
              <div className="h-6 w-1/2 bg-gray-200 rounded animate-pulse mx-auto"></div>
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse mx-auto"></div>
            </div>
          ))}
        </div>
      </div>

     
      <div className="max-w-4xl mx-auto pb-20 px-6">
        <div className="h-64 bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center space-y-4 animate-pulse">
          <div className="h-8 w-1/2 bg-gray-200 rounded"></div>
          <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
          <div className="h-12 w-48 bg-gray-200 rounded-full mt-4"></div>
        </div>
      </div>
    </div>
  );
};

