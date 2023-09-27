import { useEffect, useState } from "react";
import DonationTwo from "./DonationTwo";

const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [isShow , setIsShow] = useState(false)
    useEffect(() => {
        const favItems = JSON.parse(localStorage.getItem('fav'));
        if (favItems) {
            setDonation(favItems)
        }
        else (
            setNoFound("No Data Found")
        )
    }, [])
    return (

        <div>
            {
                noFound ? (<p className="h-[80vh] flex justify-center items-center">{noFound}</p>)
                    :
                    (
                        <div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5 lg:mt-12 ">
                                {
                                    donation.map(card => <DonationTwo key={card.id} card={card}></DonationTwo>)
                                }
                            </div>
                            <div onClick={() => setIsShow(!isShow)} className="text-center ">
                                <button className="text-white bg-[#009444] mt-5 py-2 px-5 rounded-lg">See All</button>
                            </div>
                        </div>
                    )
            }
        </div>
    );
};

export default Donation;