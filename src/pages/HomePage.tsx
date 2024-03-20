import HomeHeader from "../components/home/HomeHeader.tsx";
import HomeNav from "../components/home/HomeNav.tsx";

const HomePage = () => {
    return (
        <div className={'mb-20'}>
           <HomeHeader/>
            <HomeNav/>
            <div className="container mx-auto">
                <img src="/assets/home/homeNav/brands.webp" alt=""/>
            </div>
        </div>
    );
};

export default HomePage;