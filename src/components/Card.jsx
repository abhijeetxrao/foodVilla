import React from "react";
import { Link } from "react-router";

function card({ props }) {
  console.log(props);
  return (
    <Link to ={{pathname:`/restaurant/${props.info.id}`}}>
      <div className="w-[250px] border-2 border-black p-3 flex flex-col gap-3">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.info.cloudinaryImageId}`}
          alt="food"
          className="w-full h-[150px] object-cover border border-black"
        />
        <h3 className="mt-3 text-lg font-bold">{props.info.name}</h3>

        <p className="mt-1 text-sm font-semibold flex flex-wrap">
          {props.info.cuisines.join(", ")}
        </p>

        <p className="mt-2 text-sm font-semibold">{`${props.info.sla.lastMileTravelString} kms away!`}</p>
      </div>
    </Link>
  );
}

export default card;
