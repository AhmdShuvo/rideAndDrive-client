import { Container } from 'postcss';
import React, { useEffect, useState } from 'react';
import Car from './Car';

const Cars = () => {
    const [cars,setCars]=useState([])

    useEffect(()=>{
        fetch("https://enigmatic-escarpment-30976.herokuapp.com/cars").then(res=>res.json()).then(data=>setCars(data))

    },[])
    return (
        <>  <h1 className="text-xl font-bold m-7" >Our Cars </h1>
        <hr style={{border:"2px solid grey",marginBottom:'20px'}} />
               <center>
            <section className="container grid md:grid-cols-3 ms-5 gap-1">

              
       {


          cars.map(car=><Car 
           key={car._id}
           car={car}
          ></Car>)

       }
     </section>
     </center>
     </>

    );
};

export default Cars;