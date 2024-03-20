
const HomeHeader = () => {
    return (
        <div className="relative mb-20">
            <div className={'absolute top-5 left-10 text-white text-5xl p-2'}>
                <div className="absolute opacity-50 bg-white z-10 blur top-0 left-0 right-0 bottom-0"></div>
                <img src="/assets/header/Logo-header.png" className={'w-[400px] relative z-20'} alt=""/>
            </div>
            <video src="/assets/home/1.mp4"
                   loop
                   autoPlay={true}
                   className={'rounded-3xl'}
            ></video>
        </div>
    );
};

export default HomeHeader;