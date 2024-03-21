
interface InputProps{
    type: string
    placeholder: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const MyInput = ({onChange, placeholder, type}:InputProps) => {
    return (
        <input
            className={'w-full mb-5 border-2 transition-all border-[#c2e6fd] outline-0 py-4 px-6 active:border-2 active:border-[#94c8fd] focus:border-2 focus:border-[#94c8fd] text-xl'}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
        />
    );
};

export default MyInput;