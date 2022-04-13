import { Button, Table } from '@mui/material';
import React from 'react';

const Order = ({order,removeOrderHandler}) => {
 
    return (
        <div>
           <Table>
           <thead>
            
            </thead>
            <tbody>
           
                <tr >
                  
                  <td> Name :- {order.purchase.name}</td>
                  <td> price :- ${order.purchase. cost}</td>
                  <td> <Button onClick={()=>{
                      removeOrderHandler(order._id)
                  }}>Delete order</Button></td>
                  {/* <td>{order.status}</td> */}
          </tr> 
            </tbody>
               </Table>
        </div>
    );
};

export default Order;