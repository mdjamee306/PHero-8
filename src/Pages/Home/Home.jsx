import Banner from "../../Components/Banner/Banner";
import Cards from "../../Components/Cards/Cards";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Cards data={data}></Cards>
        </div>
    );
};

export default Home;