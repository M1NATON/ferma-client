import {NavLink} from "react-router-dom";


interface HomeNavItemProps {
    text: string
    img: string
    link: string
}

const HomeNavItem = ({text, link, img}: HomeNavItemProps) => {
    return (

        <div className="w-[45%] h-[500px] rounded-3xl relative mb-20">
            <NavLink to={link}>
                <img src={img}
                     className={'w-full h-full object-cover rounded-3xl'} alt=""/>
                <p className={'absolute z-20 top-[50%] left-5 bg-[#74a1bc] px-4 py-2 text-2xl uppercase text-white'}>{text}</p>
                <div
                    className="absolute top-0 left-0 right-0 bottom-0 bg-[#7e8da1] opacity-70 hover:opacity-20 transition-all rounded-3xl"></div>
            </NavLink>
        </div>

    );
};

export default HomeNavItem;