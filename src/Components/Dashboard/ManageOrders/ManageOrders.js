import React, { useEffect, useState } from 'react';
import ManageOrder from './ManageOrder';

const ManageOrders = () => {

 
        const [orders, setOrders] = useState([]);
        const [success, setSuccess] = useState();
      
        useEffect(() => {
          fetch(`https://rideanddrive-server.onrender.com/orders`)
            .then((res) => res.json())
            .then((data) => {
              setOrders(data);
            });
        }, []);
      
        const removeOrderHandler = (id) => {
          const proceed = window.confirm('Are you sure you want to delete?');
          if (proceed === true) {
            const url = `https://rideanddrive-server.onrender.com/orders/${id}`;
            fetch(url, {
              method: 'DELETE',
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount) {
                  
                  setSuccess(true);
                  setTimeout(() => {
                    setSuccess(false);
                  }, 5000);
                  const remaining = orders.filter((order) => order._id !== id);
                  setOrders(remaining);
                }
              });
          }
        };
 
    return (
        <div>
            {

               
            orders.length === 0 ? (
          <div className='box-shadow p-5 bg-white'>You have no order</div>
        ) : (
          orders.map((order, index) => (
            <ManageOrder
              key={order._id}
              order={order}
              quantity={index}
              removeOrderHandler={removeOrderHandler}
            ></ManageOrder>
          ))
       ) } 
    
        </div>
    );
};

export default ManageOrders;