import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <>
      <div className="digital__box">
       
          <div className="brand">
            <h1>
              Building digital <br /> products, brands <br /> & experience
            </h1>
            <p>
              Digital Agency is your online team mangement tool that <br /> easy
              and prompt
            </p>

            <button>Contact Us</button>
          </div>
          <div className="img1">
            <img
              src="https://react-3-11-ej5x.vercel.app/business-1.png"
              alt=""
            />
          </div>
        </div>
      
    </>
  );
};

export default Card;
