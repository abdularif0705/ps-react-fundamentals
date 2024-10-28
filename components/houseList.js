import React, { useEffect, useRef, useState } from "react";
import HouseRow from "./houseRow";
import AddHouseButton from "./AddHouseButton";

const HouseList = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch("/api/houses");
      const houses = await response.json();
      setHouses(houses);
    };
    fetchHouses();
  }, []);

  const addHouse = async () => {
    const newHouse = {
      id: houses.length + 1,
      address: "32 Valley Way, New York",
      country: "USA",
      price: 1000000,
    };

    // Update the state
    setHouses([...houses, newHouse]);

    // Persist the new house in the API
    await fetch("/api/houses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newHouse),
    });
  };

  return (
    <>
      <div className="row mb-2">
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
          {houses.map((h) => (
            <HouseRow key={h.id} house={h} />
          ))}
        </tbody>
      </table>
      <AddHouseButton onAdd={addHouse} />
    </>
  );
};

export default HouseList;
