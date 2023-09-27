import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    const { id, image, category_name, title, card_bg, title_color, category_bg } = card || {}
    return (
        <div>
            <Link to={`/cards/${id}`}>
                <div className='cursor-pointer rounded-xl shadow-xl' style={{ background: `${card_bg}` }}>
                    <div className={`flex flex-col drop-shadow-xl rounded-xl  bg-clip-border shadow-md`}>
                        <div className={`overflow-hidden rounded-xl  bg-clip-border`}>
                            <img
                                src={image}
                                className=" w-full "
                            />
                        </div>
                        <div className={`px-4 mt-5 `} style={{ color: `${title_color}` }} >
                            <div>
                                <button className='py-1 px-4 font-medium' style={{ background: `${category_bg}` }} >{category_name}</button>
                            </div>
                            <div className='mt-3 mb-4 font-semibold text-sm'>
                                <h4>{title}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;