import { Alert, Button, Container, useFormControl } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddNew = () => {
   

    const [CarData,setData]=useState({})
                
     const handleChange=e=>{
         const field= e.target.name
         const value=e.target.value
      const newLogindata={...CarData}
      newLogindata[ field ]=value;
      setData(newLogindata)
     }
 
 
     const handleUpload=e=>{
 
                 const data=CarData
               fetch("http://localhost:9000/cars",{
         
              method:"POST",headers:{"content-type":'application/json'},
              body:JSON.stringify(data)
         
              })
 
              alert('car Details adeed')
 
              e.preventDefault()
         
             }
    return (
        <Container>
            <h1>Add New Car</h1>

            <form className="container" onSubmit={handleUpload} >
            <div class="mb-6">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
    <input onChange={handleChange} name="name" type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div class="mb-6">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Picture URL</label>
    <input onChange={handleChange} name="picture" type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div class="mb-6">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cost</label>
    <input onChange={handleChange} name="cost" type="number" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div class="mb-6">
    <label for="Company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company</label>
    <input onChange={handleChange} name="company" type="number" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div class="mb-6">
    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
    <input onChange={handleChange} name="about" type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
 
            <Button className="" type="submit">upload  </Button>
          </form>
        </Container>
    );
};

export default AddNew;