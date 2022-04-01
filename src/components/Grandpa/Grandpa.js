import React, { createContext, useState } from "react";
import Uncle from "../Uncle/Uncle";
import Father from "../Father/Father";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

export const RingContext = createContext("diamond");

const Grandpa = () => {
  const [house, setHouse] = useState(1);
  const handleBuyAHouse = () => {
    setHouse(house + 1);
  };
  const ornament = "Diamond Ring";
  return (
    <RingContext.Provider value={[house, setHouse]}>
      <div className="grandpa">
        <button onClick={handleBuyAHouse}>Buy A House</button>
        <Father house={house} ornament={ornament}></Father>
        <Uncle house={house}></Uncle>
        <Aunty house={house}></Aunty>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
