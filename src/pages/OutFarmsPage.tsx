const OutFarmsPage = () => {
    return (
        <div className={'mb-40 text-[#1b64ab]'}>
            <div className="container mx-auto">
                <h1 className={'text-5xl mt-10 font-[600] text-center mb-20'}>Наши фермы</h1>
                <div className="flex flex-col ">
                    <div className="h-[600px]">
                        <video src="/assets/Our%20farms/Nashi_ferms.mp4" muted={true} loop
                               autoPlay={true} height={'400px'} className={'object-cover rounded-t-3xl'}></video>
                    </div>
                    <div className={'w-full bg-[#c2e7fd] h-[400px] p-10 rounded-b-3xl'}>
                        <p className={'text-2xl'}>У нашего предприятия 5 собственных ферм и 6500 коров голштинской породы. Все животные
                            окружены вниманием и заботой. Например, на ферме мирового класса в с. Рогожино у каждой
                            коровы есть чип (без вреда вживлен в ухо животному) и «личное дело».
<br/><br/>
                            Чип отслеживает десятки параметров самочувствия животного в течении всего дня. В итоге наши
                            специалисты видят достаточно ли поело конкретное животное, попило воды, готово ли к доению,
                            достаточно ли прогулок или сна, и другие более точечные профессиональные параметры. В случае
                            отклонений незамедлительно принимаются меры.
<br/><br/>
                            Все благодаря системе контроля производства “CowManager”. Инновационная система помогает нам
                            контролировать полноценное питание и здоровье животных, а также воспроизводство
                            продуктивного потомства.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OutFarmsPage;