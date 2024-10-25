import React from "react";
import currencyFormatter from "../helpers/currencyFormatter";

const HouseRow = ({ house }) => {
  return (
    <tr>
      {/* no key prop needed because we're calling each individual item to pass into the function in houseList.js */}
      <td>{house.address}</td>
      <td>{house.country}</td>
      <td>{currencyFormatter.format(house.price)}</td>
    </tr>
  );
};

// const HouseRowMem = React.memo(HouseRow); // Use memoization so it rembers it's previous values so when this component is re-rendered it doesn't call HouseRow 3xs to add another row it has the previous in cache

export default HouseRow;
// export { HouseRowMem };
