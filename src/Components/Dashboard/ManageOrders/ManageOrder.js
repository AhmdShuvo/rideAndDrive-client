import { Button, Table } from '@mui/material';
import React, { useState } from 'react';

const ManageOrder = ({order, quantity, removeOrderHandler}) => {
    const [status, setStatus] = useState(order.status);
  
    
  const updateStatus = (id) => {
    fetch(`https://rideanddrive-server.onrender.com/orders/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setStatus('shipped');
        }
        window.location.reload()
      });
  };
    return (
        <div>
           <div>
           <Table>
           <thead>
            
            </thead>
            <tbody>
           
                <tr >
                  
                  <td> Name :- {order.purchase.name}</td>
                  <td> price :- ${order.purchase. cost}</td>
                  <td>Status :- {order.status}</td>
                  <td> <Button onClick={()=>{
                      removeOrderHandler(order._id)
                  }}>Delete order</Button></td>
                  <td> <Button onClick={()=>{
                      updateStatus(order._id)
                  }}>Update</Button></td>
                  {/* <td>{order.status}</td> */}
          </tr> 
            </tbody>
               </Table>
        </div>
        </div>
    );
};

export default ManageOrder;