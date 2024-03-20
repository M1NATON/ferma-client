import HomeNavItem from "./HomeNavItem.tsx";
import {NavLink} from "react-router-dom";


const HomeNav = () => {


    return (
        <div className={'mb-20 container mx-auto'}>
            <div className="w-full flex flex-wrap justify-between">
                <HomeNavItem text={'Продукт'} img={'/assets/home/homeNav/products.webp'} link={'/'}/>
                <div className="w-[50%] h-[500px] rounded-3xl relative">
                    <NavLink to={'/'}>
                        <video loop autoPlay={true}
                               src={'/assets/home/homeNav/084859dc-2083-4703-a245-65299fe15139.webm'}
                               className={'w-full h-full object-cover rounded-3xl'} />
                        <p className={'absolute z-20 top-[50%] left-5 bg-[#74a1bc] px-4 py-2 text-2xl uppercase text-white'}>Производство</p>
                        <div
                            className="absolute top-0 left-0 right-0 bottom-0 bg-[#7e8da1] opacity-70 hover:opacity-20 transition-all rounded-3xl"></div>
                    </NavLink>
                </div>

                <div className="w-[50%] h-[500px] rounded-3xl relative">
                    <NavLink to={'/'}>
                        <video loop autoPlay={true}
                               src={'/assets/home/homeNav/ferma.webm'}
                               className={'w-full h-full object-cover rounded-3xl'}/>
                        <p className={'absolute z-20 top-[50%] left-5 bg-[#74a1bc] px-4 py-2 text-2xl uppercase text-white'}>Наши фермы</p>
                        <div
                            className="absolute top-0 left-0 right-0 bottom-0 bg-[#7e8da1] opacity-70 hover:opacity-20 transition-all rounded-3xl"></div>
                    </NavLink>
                </div>
                <HomeNavItem text={'Наши рецепты'} img={'/assets/home/homeNav/recipe-new.webp'} link={'/'}/>
            </div>
        </div>
    );
};

export default HomeNav;