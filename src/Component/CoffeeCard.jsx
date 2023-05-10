/* eslint-disable no-unreachable */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl flex justify-center items-center">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="flex justify-between w-full pr-4">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{quantity}</p>
            <p>{supplier}</p>
            <p>{taste}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="btn-group btn-group-vertical space-y-2">
              <button className="btn">View</button>
              <button className="btn">Edit</button>
              <button className="btn">X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
