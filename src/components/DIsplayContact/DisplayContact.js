import React from "react";
// import { ArrowRight } from 'react-bootstrap-icons';

const DisplayContact = (props) => {
  const { name, email, phone } = props;

  return (
    <div className="card w-50 mt-5 mx-auto">
      <div
        className="card-header"
        style={{ backgroundColor: "blue", color: "#fff" }}
      >
        {/* <ArrowRight /> */}
        {name}

      </div>
      <div className="card-body">
        <div>
          {name} <br />
          {email} <br />
          {phone}
          
        </div>
      </div>
    </div>
  );
};

export default DisplayContact;
