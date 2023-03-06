import React from "react";
import Card from "./card";
import { Sdata } from './sdata';


const Services = () => {
  return (
      <>
          <div className="container card_background">
          <h2 className="text-center m-3 our_service">Our Products</h2>
              <div className="row d-flex flex-wrap justify-content-around m-4">
              {
                Sdata.map((cval , index) => {
                    return (
                       
                            <Card key={index}
                                imgsrc={cval.imgsrc}
                            titles={cval.titles}
                            
                            />
                        
                  )
              })
            }
              </div>
          </div>
      
    </>
  );
};

export default Services;
