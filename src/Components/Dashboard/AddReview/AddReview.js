import React, { useState } from 'react';
import Container from '@mui/material/Container';
import useAuth from '../../../Hooks/useAuth';
import { Alert, Button } from '@mui/material';

const AddReview = () => {

    const { user } = useAuth();
    const [ratingData, setRatingData] = useState({});
    const [success, setSuccess] = useState();
  
    const handleChange = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newUserInfo = { ...ratingData };
      newUserInfo[field] = value;
      setRatingData(newUserInfo);
     
    };

    const handleRating = (e) => {
        const userdata = { name: `${user.displayName}`, email: `${user.email}` };
    
        const ratingInfo = ratingData;
        ratingInfo.users = userdata;
        ratingInfo.img = ratingInfo.img ? ratingInfo.img : user.photoURL;
       
        fetch('http://localhost:9000/reviews', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(ratingInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              setSuccess(true);
              setTimeout(() => {
                setSuccess(false);
              }, 5000);
            }
          });
        e.preventDefault();
        alert(`YOUR REVIEW SUBMITTED WITH ${ratingData.stars} STARS `)
      };

    return (
        <Container>
          
<form onSubmit={handleRating} action="">
        
<div class="mb-6">
<label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Feed Back</label>
<input  onChange={handleChange} name="Feedback" type="text" id="large-input" class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
</div>

<div>
<label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Stars </label>
<input  onChange={handleChange} name='stars' type="number" min="1" max="5" step="any" id="small-input" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
</div>
<Button type="submit">Submit Reviews</Button>
</form>

        </Container>
    );
};

export default AddReview;