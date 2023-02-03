import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {

    const [data, setdata] = useState({ username: "", password: "" })

    const inputdata = (event) => {

        const { name, value } = event.target       
        setdata({ ...data, [name]: value })
        
    }
    
    const registerdata = (e) => {
        if (data.username === "" && data.password === "") {
            localStorage.setItem("username01" , data.username)           
            localStorage.setItem("password02" , data.password)
        } else {
            
            localStorage.setItem("username" , data.username)
            localStorage.setItem("password" , data.password)
        }
        
    }
  return (
      <>
          <div className="container-fluid register_bg">
              
      <div className="container">
        <h1 className="text-center p-5 text-success">Registration for Login </h1>
        <div className="row d-flex justify-content-center ">
          <div className="col-4 register_page">
            <form action="" className="">
              <label htmlFor="">Username :-</label> <br />
              <input type="text" placeholder="Username" onChange={inputdata} name= "username" value={data.username} />
              <br />
              <label htmlFor="">Password :-</label>
              <br />
              <input type="number" placeholder="password" onChange={inputdata} name= "password" value={data.password} />
              <br />
            </form>
            <div className="col-6 d-flex flex-column mx-auto m-4">
            <Link to="/" className="btn btn-success btn-lg" role="button" data-bs-toggle="button" onClick={registerdata} >Submit</Link>
            </div>
            
          </div>
        </div>
      </div>
          </div>
    </>
  );
};

export default Registration;
