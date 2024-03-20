
const Footer = () => {
    return (
        <div className={'w-full bg-[#c2e6fd] text-[#024dbc] relative rounded-t-3xl p-10 pb-32 flex justify-between'}>
            <div className="w-[25%] text-justify">
                <p className="text-2xl font-[600]">Телефон горячей линии</p>
                <p className="text-2xl font-[600]">8-800-100-29-48</p>
                <p className="text-2xl font-[600] mb-5">звонок по России бесплатный</p>
                <p className="">© 2024 ООО "КолоСС"</p>
            </div>
            <div className="w-[25%]">
                <img src="/assets/footer/logo-footer.png" className={'relative z-30'} alt=""/>
            </div>
            <div className="w-[25%] text-center">
                <p className="text-2xl mb-5">Мы в социальных сетях</p>
                <a href="#">
                    <img src="/assets/footer/vk.png" className={'mx-auto '} alt=""/>
                </a>
            </div>
            <img src="/assets/footer/drop-bottom.webp" className={'absolute left-[40%] bottom-0 w-[500px]'} alt=""/>
        </div>
    );
};

export default Footer;