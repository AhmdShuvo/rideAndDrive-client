import React, { useEffect, useState } from 'react';
import Car from '../Cars/Car';
import Banner from './Banne/Banner';
import Contact from './ContactPage/Contact';

const Home = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch("https://enigmatic-escarpment-30976.herokuapp.com/cars").then(res => res.json()).then(data => setCars(data.slice(0, 6)))

    }, [])
    return (
        <main>
            <Banner></Banner>
            
      <section className="grid md:grid-cols-3 ms-5 gap-1">
      {

cars.map(car => <Car
    key={car._id}
    car={car}
></Car>)
}
      </section>
      <Contact></Contact>
        </main>
    );
};

export default Home;