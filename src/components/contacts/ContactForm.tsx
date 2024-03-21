import MyInput from "../../UI/MyInput.tsx";
import {InputMask} from "primereact/inputmask";


const ContactForm = () => {
    return (
        <div className={'flex bg-[#c2e6fd] rounded-[50px]'}>
            <div className="w-1/2">
                <img src="/assets/contact/partners-1.webp" className={'rounded-l-[50px]'} alt=""/>
            </div>
            <div className="w-1/3 my-auto mx-auto py-5 px-10">
                <form action="">
                    <label htmlFor="">Имя</label>
                    <MyInput type={'text'} placeholder={''} onChange={(e) => console.log(e.target.value)}/>

                    <label htmlFor="">E-mail</label>
                    <MyInput type={'text'} placeholder={''} onChange={(e) => console.log(e.target.value)}/>

                    <label htmlFor="">Номер телефона</label>
                    <InputMask
                        mask="+7 999-999-99-99"
                        placeholder="+7 ___-___-__-__"
                        className={'w-full border-2 transition-all border-[#c2e6fd] outline-0 py-4 px-6 active:border-2 active:border-[#94c8fd] focus:border-2 focus:border-[#94c8fd] text-xl'}
                    />
                    <div className="text-center">
                        <button className={'bg-[#1c64ac] py-2 px-14 rounded-2xl text-white text-xl w-fit'}>
                            Оставить заявку
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;