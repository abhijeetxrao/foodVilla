import React from "react";
import { Link } from "react-router-dom"; // Use react-router-dom

function Card({ props }) {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    sla,
    areaName,
    costForTwo
  } = props.info;

  return (
    <Link 
      to={`/restaurant/${props.info.id}`} 
      className="block no-underline text-inherit"
    >
      <div className="w-full h-full flex flex-col group transition-transform duration-200 ease-in-out hover:scale-[0.95]">
        {/* Image Container */}
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-sm">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Discount Overlay (Optional - usually found in Swiggy API as aggregatedDiscountInfoV3) */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
            <span className="text-white font-black text-lg uppercase">
               {props.info?.aggregatedDiscountInfoV3?.header || "Best in Safety"}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="pt-3 px-1">
          <h3 className="text-lg font-bold text-gray-800 truncate leading-tight">
            {name}
          </h3>
          
          <div className="flex items-center gap-2 mt-1">
            <div className={`flex items-center justify-center gap-1 px-1.5 py-0.5 rounded-md text-white text-xs font-bold ${avgRating >= 4 ? 'bg-green-600' : 'bg-orange-400'}`}>
              <span>★</span>
              <span>{avgRating || "NEW"}</span>
            </div>
            <span className="text-gray-400">•</span>
            <span className="text-sm font-bold text-gray-700">{sla?.slaString}</span>
          </div>

          <p className="mt-1 text-sm text-gray-500 truncate leading-snug">
            {cuisines.join(", ")}
          </p>

          <p className="mt-0.5 text-sm text-gray-400 font-medium italic">
            {areaName}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Card;