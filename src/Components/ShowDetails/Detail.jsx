import React from 'react';
import swal from 'sweetalert';

const Detail = ({ card }) => {
    const handleDetails = () => {
        const addedFavArrays = [];
        const favItems = JSON.parse(localStorage.getItem('fav'))

        if (!favItems) {
            addedFavArrays.push(card)
            localStorage.setItem('fav', JSON.stringify(addedFavArrays))
            swal("Good job!", "Donation Successfully Added!", "success");
        }
        else {
            const isExists = favItems.find(card => card.id == id);
            if (!isExists) {
                addedFavArrays.push(...favItems, card)
                localStorage.setItem('fav', JSON.stringify(addedFavArrays))
                swal("Good job!", "Donation Successfully Added!", "success");
            } else{
                swal("Error!", "No Duplicate", "error");
            }




        }


        // localStorage.setItem('test', 'Jamee')
    }
    console.log(card);
    const { id,image, description, category_name, title_color, price } = card || {};
    return (
        <div>
            <div className='relative'>
                <img className='w-full lg:w-[1320px] lg:h-[500px] object-cover rounded' src={image} alt="Children.png" />
                <div className='hidden lg:block w-full p-12 left-0 bottom-0 bg-[#0B0B0B80] flex justify-start absolute '></div>
            </div>
            <div className='lg:absolute lg:ml-9 lg:-mt-20'>
                <button onClick={handleDetails} style={{ background: `${title_color}` }} className='rounded-lg text-white font-bold btn btn-success py-2 md:py-4 px-6 mt-2'>Donate ${price}</button>
            </div>
            <div className='lg:mt-12 mt-6'>
                <h3 className='font-bold text-4xl'>{category_name}</h3>
                <p className='mt-3 lg:mt-6 font-normal text-base mb-3 md:mb-8'>{description}</p>
            </div>
        </div>
    );
};

export default Detail;