import logo from '/assets/header/Logo-header.png'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={'h-screen w-[10%] text-[#82a1ad] py-10 fixed top-0 left-0'}>
            <div className="">
                <NavLink to={'.'}>
                    <img src={logo} className={'transition-all w-[450px]  mx-auto hover:translate-y-[-10px]'}  alt=""/>
                </NavLink>
            </div>
            
            <div className="mb-10">
                <NavLink to={'/'} className="text-center">
                    <img src="/assets/header/product.svg"
                         className={'transition-all w-[70px] mx-auto hover:translate-y-[-10px]'} alt=""/>
                    <p className={''}>Продукция</p>
                </NavLink>
            </div>
            <div className="mb-10">
                <NavLink to={'/about'} className="text-center">
                    <img src="/assets/header/about.svg"
                         className={'transition-all w-[70px]  mx-auto hover:translate-y-[-10px]'} alt=""/>
                    <p className={''}>О нас</p>
                </NavLink>
        </div>x
            <div className="mb-10">
                <NavLink to={'/'} className="text-center mb-10">
                    <img src="/assets/header/contact.svg"
                         className={'transition-all w-[70px]  mx-auto hover:translate-y-[-10px]'} alt=""/>
                    <p className={''}>Контакты</p>
                </NavLink>
            </div>
        </div>
    );
};

export default Header;