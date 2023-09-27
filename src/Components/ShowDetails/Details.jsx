import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const [card, setCard] = useState()

    const {id} = useParams()
    console.log(id)

    const data = useLoaderData()
    console.log(data);

    useEffect(() =>{
        
    },[id,data])
    return (
        <div className='lg:mt-20 mt-6'>
            <h1>Details</h1>
        </div>
    );
};

export default Details;