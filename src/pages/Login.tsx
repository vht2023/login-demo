import { useState, useCallback } from 'react';
import { FcGoogle } from "react-icons/fc";
import Logo from '../components/Logo';
import Heading from '../components/Heading';
import InputEmail from '../components/InputEmail';
import InputPassword from '../components/InputPassword';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isHiddenPassword, setIsHiddenPassword] = useState(true);

    const onSubmit = useCallback(() => {
        console.log(email);
        console.log(password);
    }, [email, password])

    return (
        <div className="sm:py-8 sm:px-16 p-6 flex flex-row sm:gap-16 h-screen overflow-y-scroll">
            <div className="sm:basis-1/3 sm:block hidden">
                <Logo />
            </div>
            <div className="sm:basis-2/3 flex-1 flex flex-col gap-4 sm:mt-8 sm:justify-normal justify-center">
                <Heading />
                <div className="body mt-4 flex flex-col gap-4 justify-center">
                    <InputEmail
                        value={email}
                        onChangeValue={setEmail}
                    />
                    <InputPassword
                        value={password}
                        onChangeValue={setPassword}
                        isHiddenPassword={isHiddenPassword}
                        setIsHiddenPassword={setIsHiddenPassword}
                    />
                    <div className="cursor-pointer underline sm:w-1/2 w-full text-center text-sm font-semibold">Forgot Password?</div>
                </div>
                <div className="action mt-6 flex flex-col gap-4">
                    <button
                        onClick={onSubmit}
                        className="py-3 bg-black hover:bg-black/80 text-white sm:w-1/2 w-full"
                    >
                        Sign In
                    </button>
                    <button className="py-3 bg-gray-100 hover:bg-gray-200/80 text-black sm:w-1/2 w-full flex justify-center items-center gap-3">
                        <FcGoogle size={24} />
                        <span>Sign In with Google</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;
