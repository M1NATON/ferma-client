import ContactForm from "../components/contacts/ContactForm.tsx";

const ContactPage = () => {
    return (
        <div>
            <div className="container text-[#1b64ab] mt-20 mb-40">
                <h1 className={'text-5xl  font-[600] text-center mb-20'}>Контакты</h1>
                <div className="bg-[#c2e6fd] w-full rounded-[50px] py-10 mb-40">
                    <div className="flex justify-around mb-10">
                        <div className="text-center w-1/3">
                            <p className={'font-[600] text-2xl mb-5'}>Приемная:</p>
                            <p className={'p-2 bg-white w-fit text-2xl mx-auto'}>+7 (4742) 72-72-18</p>
                        </div>

                        <div className="text-center w-1/3">
                            <p className={'font-[600] text-2xl mb-5'}>Отдел продаж::</p>
                            <p className={'p-2 bg-white w-fit text-2xl mx-auto'}>+7 (4742) 37-05-92</p>
                        </div>

                        <div className="text-center w-1/3">
                            <p className={'font-[600] text-2xl mb-5'}>Отдел кадров:</p>
                            <p className={'p-2 bg-white w-fit text-2xl mx-auto'}>+7 (4742) 72-72-20</p>
                        </div>
                    </div>
                    <div className="text-center w-1/3 mx-auto mb-10">
                        <p className={'font-[600] text-2xl'}>Юридический адрес</p>
                        <p className={'p-2 w-fit text-2xl mx-auto'}>399000, Липецкая обл., Липецкий р-н, с.
                            Вешаловка</p>
                    </div>
                    <div className="text-center w-1/3 mx-auto">
                        <p className={'font-[600] text-2xl '}>Почтовый адрес</p>
                        <p className={'p-2 w-fit text-2xl mx-auto'}>398501, Российская Федерация, Липецкая
                            область, м.р-н Липецкий, с.п.Кузьмино-Отвержский сельсовет, тер.Комплекс Рудничный,
                            зд.1.</p>
                    </div>
                    <div className="text-center w-1/3 mx-auto">
                        <p className={'font-[600] text-2xl mb-5'}>Email</p>
                        <p className={'p-2 bg-white w-fit text-2xl mx-auto'}>ecoptica@ecoptica.ru</p>
                    </div>
                </div>
                <div className="">
                    <h1 className={'text-4xl  font-[600] mx-auto w-1/2 text-center mb-20 uppercase'}>Остались вопросы? Свяжитесь с нами!</h1>
                    <ContactForm/>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;