import { Container, Rating } from '@mui/material';
import React from 'react';

const SingleReview = ({review}) => {
  
    const {Feedback}=review
    return (
        <Container style={{ borderRadius:'10px'}} className="shadow-2xl m-4 shadow-zinc-800">
          
<article style={{padding:"20px",}}>

<h1 className="text-2xl m-4 font-bold">{review.users.name} </h1>
<h3>FeedBack </h3>
<p class="mb-2 font-light text-gray-500 dark:text-gray-400">{Feedback},</p>
<a href="#" class="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
<aside>

               <Rating name="read-only" value={review.stars} readOnly />
                 
<div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
<a href="#" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
<a href="#" class="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
</div>
</aside>
</article>

        </Container>
    );
};

export default SingleReview;