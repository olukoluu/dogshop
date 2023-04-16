import React from "react";
import { FaHeart, FaPhoneAlt } from "react-icons/fa";

const Card = (props) => {
  const reserve = () => {
    alert(
      `${props.name} has been reserved for you. Please, come to the Kennel ASAP`
    );
  };

  // const [icon, seticon] = React.useState('')

  let iconStyle = {
    color: "#9b6f39",
    fontSize: "20px",
    cursor: "pointer",
  };

  return (
    <div className="card">
      <img src={props.img === 'Not available'? './photos/logo.png': props.img} className="card--img" alt={props.name} />
      <div className="card--text">
        <h2>{props.name}</h2>
        {/* <h3 className="card--price">₦{props.price}</h3> */}
      </div>
      <div className="btn__con">
        <button className="btn" onClick={reserve}>
          Reserve
        </button>
        <div className="card--icons">
          <FaHeart style={iconStyle} />
          <FaPhoneAlt style={iconStyle} />
        </div>
      </div>
    </div>
  );
};

export default Card;
