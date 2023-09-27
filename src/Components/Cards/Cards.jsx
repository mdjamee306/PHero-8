import Card from "../Card/Card";

const Cards = ({data}) => {
    // console.log(data);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 lg:mt-24 mb-6 lg:mb-16">
            {
                data?.map( card => <Card key={card.id} card ={card}></Card>)
            }
        </div>
    );
};

export default Cards;