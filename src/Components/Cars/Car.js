import React from 'react';

const Car = ({car}) => {

    const {name,cost,about,picture,company,_id}=car;
    return (
        <div class="flex justify-center m-3">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
        
            <img class="rounded-t-lg" src={picture} alt=""/>
          
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">{name}</h5>
            <p class="text-gray-700 text-base mb-4">
             {about}
            </p>
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Purchase</button>
          </div>
        </div>
      </div>
    );
};

export default Car;