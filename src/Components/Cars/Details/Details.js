import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';
import Car from '../Car';
import useAuth from '../../../Hooks/useAuth'

const Details = () => {
    const [userInfo,setInfo]=useState({})
    const {user}= useAuth()
  
    const {id}=useParams();
  
    const [order,setOrder]=useState({})

    useEffect(()=>{
        fetch("http://localhost:9000/cars").then(res=>res.json()).then(data=>{


        const match=data.find(car=>car._id===id);
        setOrder(match);

        })

    },[id])

    if(!order){
        return <Loader></Loader>
    }

   
      

        
                //    Get Values from user /// 
     const handleChange=e=>{
        const field= e.target.name
        const value=e.target.value
     const newUserInfo={...userInfo}
     newUserInfo[field]=value;
     setInfo(newUserInfo)
            
   

     }


    //  handle Order Function ///
     

    const handleOrder=e=>{

        const purchase=order;

        let userData={name:`${user.displayName}`,email:`${user.email}`,address:`${userInfo.address}`,phone:`${userInfo.phone}`}

        userData.purchase=purchase
        userData.status="pending"
                  
 //   POST REQUEST //
    fetch(`http://localhost:9000/orders`,{
       method:'POST',
       headers:{ "content-type": 'application/json'},
              body:JSON.stringify(userData)

     })


     alert("Order Added successfully")
    e.preventDefault()
}

   //  distr
    return (
        <Container> 

    <h1 className="text-xl">Place Order</h1>
          <section className="flex justify-evenly ">
          <Car key={order._id}
           
           car={order}></Car>

           <section>
           <form onSubmit={handleOrder}>
  <div className="mb-6 ">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
    <input type="email" id="email" className="shadow-sm bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" defaultValue={user.email}/>
  </div>
  <div className="mb-6">
    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
    <input type="text" id="Name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" defaultValue={user.displayName} required />
  </div>
  <div className="mb-6">
    <label for="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Address</label>
    <input onChange={handleChange} name="address" type="text" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <div className="mb-6">
    <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
    <input onChange={handleChange} name="phone" type="text" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <div className="flex items-start mb-6">
    
  
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Place Order</button>
</form>
           </section>
          </section>
        </Container>
    );
};

export default Details;