import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SignleReview from './SingleReview'

const Review = () => {
    const [reviews, setreviews] = useState([])

    useEffect(() => {

        fetch('http://localhost:9000/reviews').then(res => res.json()).then(data => {
            setreviews(data)
        })
    }, [])
    return (
        <>
            <h1 className="text-3xl m-4 font-bold">Ratings From our Users </h1>
            <Container >
                <center>
                <section className=" grid md:grid-cols-3 ms-5 gap-1">
                    {

                        reviews.map(review => <SignleReview
                            key={review._id}
                            review={review}
                        ></SignleReview>)
                    }
                </section>

                </center>
            </Container>
        </>

    );
};

export default Review;