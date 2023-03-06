import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Login = () => {

    const [data, setdata] = useState({ username: "", password: "" });
    

  const navigate = useNavigate();

  // localStorage.setItem("username", "parag");
  // localStorage.setItem("password", 123);

  const localusername = localStorage.getItem("username");
  const localpassword = localStorage.getItem("password");

    const inputdata = (event) => {
      
        const { name, value } = event.target;
        
    setdata({ ...data, [name]: value });

   
      
  };

  const submitdata = (e) => {
    e.preventDefault();

      setdata({
       username : "" , password : ""
   })

    if (data.username === localusername && data.password === localpassword) {
      console.log("navigate");
      navigate("/home");
    } else {
    //   const para = document.createElement("p");
    //   para.innerText = "Wrong Username & Password....!";
    //   document.body.appendChild(para);
        
    const myElement = document.getElementById("error");
        myElement.style.color = "red";
        myElement.innerHTML = " Wrong Username & Password....! "
        
    }
  };

  return (
    <>
      <div className="container-fluid login_bg">

      <div className="container ">
        <h1 className="text-center p-5 text-success">Login Here</h1>
        <div className="row  d-flex justify-content-center ">
        <div className="col-4 login_page mx-auto mb-5">
          <form action="" autoComplete="off" className="">
            <label htmlFor="">Usename :-</label> <br />
              <input
                placeholder="Username"
                type="text"
                name="username"
                value={data.username}
                onChange={inputdata}
                />
            <br />
            <label htmlFor="">Password :-</label> <br />
              <input
                placeholder=" Password"
                type="number"
                name="password"
              value={data.password}
              onChange={inputdata}
            />
            <br />
            <p id="error" className="text-center" ></p>
            {/* <button type="submit" onClick={submitdata}>
              Login
            </button> */}
              <div className="col-6 d-flex flex-column mx-auto">

              <button type="button" className="btn btn-primary" data-bs-toggle="button" autocomplete="off" onClick={submitdata} >Login</button> <br />
            <Link to="/registration" className="btn btn-success" role="button" data-bs-toggle="button">Registration here</Link>
              </div>
                  </form>
        </div>
      </div>
     </div>
            </div>
    </>
  );
};

export default Login;
