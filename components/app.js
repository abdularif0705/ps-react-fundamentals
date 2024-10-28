import { useState } from "react";
import Banner from "./banner";
import HouseList from "./houseList";
import House from "./house";

const App = () => {
  const [selectedHouse, setSelectedHouse] = useState();
  // Reason we make a wrapper. Maybe they will accidentally won't put in a house object, but another object that is not related or some string or number
  // wrapper function that accepts a house object and does the call to setSelectedHouse. And instead of passing setSelectedHouse to HouseList, we now pass the wrapper to it. The advantage of this approach is that the App component now still is in full control of its own state
  const setSelectedHouseWrapper = (house) => {
    // check if house object
    setSelectedHouse(house);
  };

  return (
    <>
      <Banner>
        <div>Providing houses all over the world</div>
      </Banner>
      {selectedHouse ? (
        <House house={selectedHouse} />
      ) : (
        <HouseList
          selectHouse={setSelectedHouseWrapper}
        /> /* In JS, functions are objects, so they can be passed to other components like any other type  */
      )}
      {/* If selectedHouse has a truthy value we display the house otherwise by default we display the list */}
    </>
  );
};

export default App;
