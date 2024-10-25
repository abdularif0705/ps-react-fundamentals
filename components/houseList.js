import React, { useState } from "react";
import HouseRow, { HouseRowMem } from "./houseRow";

const houseArray = [
  {
    id: 1,
    address: "12 Valley of Kings, Geneva",
    country: "Switzerland",
    price: 900000,
  },
  {
    id: 2,
    address: "89 Road of Forks, Bern",
    country: "Switzerland",
    price: 500000,
  },
];

const HouseList = () => {
  // rules of hooks
  // 1) call at the top level, on first line no way it can be skipped when w ecall this function
  // 2) useState is called within the components function
  const [houses, setHouses] = useState(houseArray); // we are no longer using houseArray directly in the tbody function lines, we're setting the initial value to houseArray
  const [counter, setCounter] = useState(0);
  setCounter((current) => counter + 1);

  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: 3,
        address: "32 Valley Way, New York",
        country: "USA",
        price: 1000000,
      },
    ]);
  };

  return (
    <>
      <div className="row mb-2">
        {/* using bootstrap css classes for rest of the css classes e.g. text-center */}
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {/* Only elements directly inside map call need keys */}
          {houses.map((h) => (
            <HouseRow key={h.id} house={h} />
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addHouse}>
        {/* button doesn't start with capital so that means it's an internal DOM component which we know from usign it in in the past in html */}
        Add
      </button>
    </>
  );
};

export default HouseList;
