import AboutItemFerma from "../components/about/AboutItemFerma.tsx";

const AboutUsPage = () => {


    const arrFerma = [
        {
            title: 'Корма',
            description: `
            Мы создаём корма для наших животных на собственных полях. Ведь от того, что едят коровы, от их комфорта и здоровья напрямую зависит качество молока.

Корма для наших животных выращиваются только в экологически чистых районах Липецкой области, в строгом соответствии необходимым в данной отрасли требованиям.

Миссия нашего бренда - создание натурального продукта, отвечающего высоким стандартам, с первых этапов.
        `,
            img: '/assets/about/history(3).webp',
            flex: '',
            rounded: 'rounded-r-[80px] pr-10'
        },
        {
            title: 'Фермы',
            description: `
            Где рождается «Счастливое Детство»? На наших собственных фермах в Липецкой области. Потому что собственные фермы - это свои коровы , а значит и свежее молоко!

С самого рождения телят, мы растим их в любви и заботе. А питаются они молоком от наших счастливых коров!

В содержании животных для нас главное - их здоровье и бережное отношение, то есть комфорт, сбалансированный рацион и сбалансированный режим доения!
        `,
            img: '/assets/about/history(5).webp',
            flex: 'flex-row-reverse',
            rounded: 'rounded-l-[80px] pl-10'
        },

        {
            title: 'Производство',
            description: `
            Около 100 000 литров перерабатывает наш молочный комбинат ежесуточную. Затем все продукты проходят строгий контроль качества перед тем, как оказаться в продаже.
        `,
            img: '/assets/about/history(6).webp',
            flex: '',
            rounded: 'rounded-r-[80px] pr-10'
        },

    ]


    return (
        <div className={'pt-20 mb-20'}>
            <div className="container text-[#1b64ab]">
                <h1 className={'text-5xl  font-[600] text-center mb-20'}>«Счастливое детство» сегодня</h1>
                <div className={''}>
                    {
                        arrFerma.map((item, idx) => (
                            <AboutItemFerma key={idx} rounded={item.rounded} title={item.title}
                                            description={item.description} flex={item.flex} img={item.img}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;