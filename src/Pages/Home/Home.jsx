import { useState } from "react";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Card";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const data = useLoaderData();
    const [allcard, setCard] = useState(data);
    const searchandle = (cardData) => {
        setCard(cardData);
    };
    return (
        <div>
            <Banner data={data} searchandle={searchandle}></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 lg:mt-24 mb-6 lg:mb-16">
                {
                    allcard?.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;