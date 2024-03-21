import {createBrowserRouter} from "react-router-dom";
import Root from "../pages/Root.tsx";
import HomePage from "../pages/HomePage.tsx";
import AboutUsPage from "../pages/AboutUsPage.tsx";
import ContactPage from "../pages/ContactPage.tsx";
import ProductionPage from "../pages/ProductionPage.tsx";
import OutFarmsPage from "../pages/OutFarmsPage.tsx";


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
            },
            {
                path: '/contact',
                element: <ContactPage/>,
            },
            {
                path: '/production',
                element: <ProductionPage/>,
            },
            {
                path: '/out-farms',
                element: <OutFarmsPage/>,
            }
        ]
    }
])