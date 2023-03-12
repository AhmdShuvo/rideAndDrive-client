
import React, { useEffect, useState } from 'react';
import Loader from '../Shared/Loader/Loader';
import Car from './Car';

const Cars = () => {
    const [cars,setCars]=useState([])

    useEffect(()=>{
        fetch("https://rideanddrive-server.onrender.com/cars").then(res=>res.json()).then(data=>setCars(data))

    },[])

    if(cars.length===0){
        return <Loader></Loader>
    }
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