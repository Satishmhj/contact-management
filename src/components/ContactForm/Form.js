import React, { useState } from "react";
import DisplayContact from "../DIsplayContact/DisplayContact";

const Form = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredPhoneTouched, setEnteredPhoneTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes("@");
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const enteredPhoneIsValid = enteredPhone.includes("");
  const enteredPhoneIsInvalid = !enteredPhoneIsValid && enteredPhoneTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const phoneInputChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const phoneInputBlurHandler = (event) => {
    setEnteredPhoneTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    setEnteredPhoneTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);
    console.log(enteredPhone);

    setEnteredName("");
    setEnteredNameTouched(false);

    setEnteredEmail("");
    setEnteredEmailTouched(false);

    setEnteredPhone("");
    setEnteredPhoneTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = enteredEmailIsInvalid
    ? "form-control invalid"
    : "form-control";

  const phoneInputClasses = enteredPhoneIsInvalid
    ? "form-control invalid"
    : "form-control";
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
          <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                onChange={nameInputChangeHandler}
                onBlur={nameInputBlurHandler}
                value={enteredName}
              />
              {nameInputIsInvalid && (
                <p className="error-text">Name must not be empty.</p>
              )}
            </div>
            <div className={emailInputClasses}>
              <label htmlFor="email">Your E-Mail</label>
              <input
                type="email"
                id="email"
                onChange={emailInputChangeHandler}
                onBlur={emailInputBlurHandler}
                value={enteredEmail}
              />
              {enteredEmailIsInvalid && (
                <p className="error-text">Please enter a valid email.</p>
              )}
            </div>
            <div className={phoneInputClasses}>
              <label htmlFor="phoneNumber">Your Phone no: </label>
              <input
                type="number"
                id="phone"
                onChange={phoneInputChangeHandler}
                onBlur={phoneInputBlurHandler}
                value={enteredPhone}
              />
              {enteredEmailIsInvalid && (
                <p className="error-text">Please enter a valid email.</p>
              )}
            </div>
            <div className="form-actions">
              <button disabled={!formIsValid}>Submit</button>
            </div>
          </form>

          <DisplayContact
            name={enteredName}
            email={enteredEmail}
            phone={enteredPhone}
          />
          {/* <form>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="abc@xyz.com"
                name="email"
                onChange={changeHandler.email}
                // value={() => setEmail(email)}
                // setEmail={}
              />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                onChange={changeHandler.name}
                // value={() => setName(name)}
                
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="number"
                className="form-control"
                placeholder="9860036027"
                name="phone"
                onChange={changeHandler.phone}
                // value={() => setPhone(phone)}
              />
            </div>
            <br />

            <button type="submit" className="btn btn-primary" onSubmit={formSubmissionHandler}>
              Submit
            </button>
          </form> */}
        </div>
      </div>
    </>
  );
};

export default Form;
