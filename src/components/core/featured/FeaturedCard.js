import React from "react";
import { featured } from "../../../data/Data";
import { Fade } from "react-awesome-reveal";

const FeaturedCard = () => {
  return (
    <>
      <Fade duration="1500">
        <div className="content grid5 mtop">
          {featured.map((items, index) => (
            <div className="box" key={index}>
              <img src={items.cover} alt="" />
              <h4>{items.name}</h4>
              <label>{items.total}</label>
            </div>
          ))}
        </div>
      </Fade>
    </>
  );
};

export default FeaturedCard;

{
  /* <Fade direction="left" duration="2000" triggerOnce></Fade> */
}
