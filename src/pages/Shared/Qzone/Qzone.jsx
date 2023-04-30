import React from "react";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";
const Qzone = () => {
  return (
    <div className="">
      <div className="bg-info text-center my-4 py-4 ">
        <h3>Qzone</h3>
        <div className="">
          <img src={qzone1} alt="" />
          <img src={qzone2} alt="" />
          <img src={qzone2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Qzone;
