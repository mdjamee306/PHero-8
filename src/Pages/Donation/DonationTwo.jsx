
const DonationTwo = ({ card }) => {
    console.log(card);
    const { id, image, category_name, title, card_bg, title_color, category_bg, price } = card || {};
    return (
        <div >
            <div style={{ background: `${card_bg}` }} className="lg:flex w-full rounded-xl bg-white bg-clip-border text-gray-700 shadow-md lg:gap-8">
                <div className="  overflow-hidden rounded-xl rounded-r-none bg-white text-gray-700">
                    <img
                        src={image}
                        alt="image"
                        className="w-full h-full"
                    />
                </div>
                <div className="lg:my-6 my-4 px-5 lg:px-1">
                    <button className='py-1 px-4 font-medium rounded' style={{ background: `${category_bg}`, color: `${title_color}` }} >{category_name}</button>
                    <div className='my-4 font-semibold text-sm'>
                        <h4>{title}</h4>
                    </div>
                    <div className="">
                        <div>
                            <button style={{ color: `${title_color}` }} className='font-bold text-base mb-5'>${price}</button>
                        </div>
                        <div>
                            <button style={{ background: `${title_color}` }} className='rounded-lg text-white font-bold btn btn-success py-2 md:py-4 px-6 mt-2 mb-2'>View Details</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default DonationTwo;