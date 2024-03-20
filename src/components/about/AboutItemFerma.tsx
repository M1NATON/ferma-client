

interface AboutItemFermaProps{
    title: string
    description: string
    flex: string
    img: string
    rounded: string
}

const AboutItemFerma = ({flex, title, description, img, rounded}:AboutItemFermaProps) => {
    return (
        <div className={`w-full mb-20 flex ${flex} gap-10 bg-[#c2e7fd] ${rounded}`}>
            <img src={img} className={'w-[40%]'} alt=""/>
            <div className="-w-[60%] py-10">
                <h1 className={'text-2xl font-[600] mb-5'}>{title}</h1>
                <p className="text-xl">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default AboutItemFerma;