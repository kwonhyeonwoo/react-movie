import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";


const router = createBrowserRouter([

    {
        path: '/',
        element: <Header />,
        children: [
            { index: true, element: <Home /> }
        ]
    }
])
export default router;