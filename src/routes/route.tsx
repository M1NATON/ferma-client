import {createBrowserRouter} from "react-router-dom";
import Root from "../pages/Root.tsx";
import HomePage from "../pages/HomePage.tsx";
import AboutUsPage from "../pages/AboutUsPage.tsx";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <HomePage/>,
            },
            {
                path: '/about',
                element: <AboutUsPage/>,
            }
        ]
    }
])