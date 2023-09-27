import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Detail from './Detail';

const Details = () => {
    const [card, setCard] = useState({});

    const { id } = useParams();
    // console.log(id);

    const data = useLoaderData()
    // console.log(data);

    useEffect(() => {
        const findCard = data?.find((card) => card.id == id);

        setCard(findCard)

    }, [id, data]);
    // console.log(card)
    return (
        <div className='lg:mt-20 mt-6 '>
            <Detail card={card}></Detail>
        </div>
    );
};

export default Details;