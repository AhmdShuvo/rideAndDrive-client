import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Loader from '../Shared/Loader/Loader';

const Car = ({car}) => {
  const {setIsLoadng}=useAuth()

  if(!car.name){
  return <Loader></Loader>
  }

    const {name,about,picture,_id}=car;
    return (
        <div className="flex justify-center m-3">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
        
            <img className="rounded-t-lg" src={picture} alt=""/>
          
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
            <p className="text-gray-700 text-base mb-4">
             {about.slice(0,378)}
            </p>
           <Link to={`${_id}`}> <button onClick={()=>setIsLoadng(false)} type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Purchase</button></Link>
           
          </div>
        </div>
      </div>
    );
};

export default Car;