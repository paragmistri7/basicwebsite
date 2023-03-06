import React from 'react';
import { Link } from 'react-router-dom';
// import iamges from "../basictree.png"

const Common = (props) => {
    return (

        <div className="container-fluid gradiantcl common_page ">
            <div className="container">
                <div className="row row_height ">
                    <div className="col-md-5 home_lhs ">
                        <h1>{props.title}</h1>
                        <h1 className='home_header' > {props.name} </h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, ratione?</p>
                        <button className='home_btn' > <Link to={props.dir}>  {props.btn} </Link> </button>
                    </div>
                    <div className="col-md-6 home_rhs">
                            <img src={props.iamges} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Common;