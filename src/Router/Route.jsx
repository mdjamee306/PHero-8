import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Donation from '../Pages/Donation/Donation';
import Statistics from '../Pages/Statistics/Statistics';
import Error from '../Pages/ErrorPage/Error';
import Details from '../Components/ShowDetails/Details';

const myRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/data.json')    
            },
            {
                path: "/donation",
                element: <Donation></Donation>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
                loader: () => fetch('/data.json')
            },
            {
                path: "/cards/:id",
                element: <Details></Details>,
                loader: () => fetch('/data.json')
            }

        ]
    }
]);

export default myRoute;