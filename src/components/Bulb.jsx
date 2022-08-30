import React, { useState } from "react";

const Bulb = () => {
  const [isBulbOn, setIsBulbOn] = useState(false);

  return (
    <div>
      <div
        className="bulb"
        style={{ background: isBulbOn ? "yellow" : "gray" }}
      ></div>
      <button onClick={() => setIsBulbOn(!isBulbOn)}>Off / On</button>
    </div>
  );
};

export default Bulb;