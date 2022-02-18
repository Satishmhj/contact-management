import React, { useEffect, useState } from "react";
import DisplayContact from "../DIsplayContact/DisplayContact";
import { useFormik } from "formik";

const Form = () => {
  const [data, setData] = useState([]);
  
  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      email: "",
    },
    onSubmit: (values, {resetForm}) => {
      let getData = [...data];
      getData.push(values)
      setData(getData)
      resetForm();
    },
  });
  const handleDelete = (index) => {
    let getData = [...data]
    getData.splice(index, 1)
    setData(getData)

  
  }
  
  return (
    <>
      <div className="card w-50 mt-5 mx-auto">
        <div
          className="card-header"
          style={{ backgroundColor: "Blue", color: "#fff" }}
        >
          <h1>Contact Form</h1>
        </div>
        <div className="card-body">
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="Name" style={{padding: '5px'}}> Name</label>
              <input
                id="Name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                className="form-group"
              />
            </div>
            <br/>
            <div>
              <label htmlFor="Email" style={{padding: '5px'}}> Email </label>
              <input
                id="Email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="form-group"
              />
            </div>
            <br/>
            <div>
              <label htmlFor="PhoneNumber" style={{padding: '5px'}}> Phone</label>
              <input
                id="PhoneNumber"
                name="phoneNumber"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
                className="form-group"
              />
            </div>
            <br/>
            <button type="submit" >Submit</button>
          </form>
        </div>
      </div>
      <DisplayContact data={data} handleDelete={handleDelete} setData={setData}/>
    </>
  );
};

export default Form;
