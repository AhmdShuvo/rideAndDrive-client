import React, { useEffect, useState } from 'react';
import Car from '../Cars/Car';
import Banner from './Banne/Banner';
import Contact from './ContactPage/Contact';
import Container from '@mui/material/Container';
import Review from './Review/Review';
import Loader from '../Shared/Loader/Loader'

const Home = () => {
    const [cars, setCars] = useState([])
   

    useEffect(() => {
        fetch("http://localhost:9000/cars").then(res => res.json()).then(data => setCars(data.slice(0, 6)))

    }, [])
    if(cars.length===0){
        return <Loader />
    }
    return (
        <Container>
            <Banner></Banner>
            <h1 className="text-2xl font-extrabold subpixel-antialiased text-orange-600">Our Featured Cars For You </h1>
      <section className="grid md:grid-cols-3 ms-5 gap-1">
         
      {

cars.map(car => <Car
    key={car._id}
    car={car}
></Car>)
}
      </section>
      <Review></Review>
      <Contact></Contact>

        </Container>
    );
};

export default Home;