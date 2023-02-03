import React, { useState } from "react";

const Contact = () => {
  const [add, setadd] = useState({
    username: "",
    email: "",
    contact: "",
    message: "",
  });
  const [update, setupdate] = useState([]);

  const inputdata = (event) => {
    const { value, name } = event.target;
    setadd({ ...add, [name]: value });
  };

  const updatedata = (e) => {
    e.preventDefault();

    let contact = document.getElementById("contact");
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    if (
      add.username === "" ||
      add.email === "" ||
      add.contact === "" ||
      add.message === ""
    ) {
      alert("Please fill All Data");
    } else {
      setupdate([...update, add]);
    }

    setadd({
      username: "",
      email: "",
      contact: "",
      message: "",
    });
  };

  const deleteitem = (index) => {
    const deleteupdated = update.filter((preval, ind) => {
      return ind !== index;
    });
    setupdate(deleteupdated);
  };

  return (
    <>
      <div className="container-fluid registration_bg">
        <div className="container">
          <h2 className="text-center mt-3 fs-1 text-light">
            Register Your Data
          </h2>
          <div className="row d-flex justify-content-center m-3">
            <div className="col-5">
              <form action="" className=" contact_form " autoComplete="off">
                <label htmlFor="">UserName :-</label>
                <br />
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={add.username}
                  onChange={inputdata}
                />{" "}
                <br />
                <p id="username"></p>
                <label htmlFor="">E-mail :-</label> <br />
                <input
                  type="email"
                  placeholder="E-mail Address"
                  name="email"
                  value={add.email}
                  onChange={inputdata}
                />
                <p id="email"></p>
                <label htmlFor="">Contact no. :-</label> <br />
                <input
                  type="number"
                  placeholder="Contact Number"
                  name="contact"
                  value={add.contact}
                  onChange={inputdata}
                />
                <p id="contact"></p>
                <label htmlFor="">Message :-</label> <br />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={add.message}
                  onChange={inputdata}
                  cols=""
                  rows=""
                ></textarea>
                <p id="message"></p>

                <button
                  type="button"
                  className="btn btn-outline-secondary text-light btn-lg font-weight-bolder "
                  onClick={updatedata}
                >
                  Submit
                </button>
                
              </form>
            </div>

          </div>
          <hr className="bg-light m-5" />
          <div className="m-5">

            <div className="row d-flex justify-content-between flex-wrap">
          

              {update.map((cval, index) => {
                return (
                  <>
                    <div className="w-25 border m-3 p-2 shadow-6-strong rounded-5  " key={index}>
                      <h2> {cval.username}</h2>
                     <p className="m-0"> {cval.email}</p>
                      <h4 className="m-0" >{cval.contact}</h4>
                      <p className="m-0">{cval.message}</p>

                      <button className="m-3 float-end btn btn-outline-secondary text-light btn-small p-2 font-weight-bolder" onClick={() => deleteitem(index)}>Delete</button>

                    </div>
                  </>
                );
              })}
            
                  </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
