import React, { useState } from "react";
import {
  BsArrowDownCircleFill,
  BsFillTrashFill,
  BsFillPencilFill,
} from "react-icons/bs";
// import { ArrowRight } from 'react-bootstrap-icons';

const DisplayContact = (props) => {
  const { data, handleDelete, setData} = props;
  const [show, setShow] = useState(false);

  const handleToggle = (index) => {
  
    console.log("toggling")
  };

  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="card w-50 mt-5 mx-auto">
            <div
              className="card-header"
              style={{ backgroundColor: "blue", color: "#fff" }}
            >
              <div style={{ float: "left" }}>
                <BsArrowDownCircleFill
                  onClick={() => {
                     handleToggle(index)
                  }}
                />
              </div>

              {item.name}
              <div style={{ float: "right" }}>
                <BsFillTrashFill
                  onClick={() => {
                    handleDelete(index);
                  }}
                />
                <BsFillPencilFill />
              </div>
            </div>

            <div className="card-body">
              <>
                <p> Name : {item.name}</p>
                <p> Email : {item.email}</p>
                <p> PhoneNumber : {item.phoneNumber}</p>
              </>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DisplayContact;
