import React from 'react';
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";

interface Props {
    value: string;
    isHiddenPassword: boolean;
    setIsHiddenPassword: React.Dispatch<React.SetStateAction<boolean>>;
    onChangeValue: React.Dispatch<React.SetStateAction<string>>;
};

const InputPassword: React.FC<Props> = ({ value, isHiddenPassword, setIsHiddenPassword, onChangeValue }) => {
    return (
        <div className="sm:w-1/2 w-full leading-none">
            <p>Password</p>
            <div className="w-full relative">
                <input
                    required
                    autoComplete="new-password"
                    type={isHiddenPassword ? 'password' : 'text'}
                    className="p-4 pr-8 mt-2 w-full border-1 border-black focus:bg-white bg-gray-100 tracking-[0.5rem]"
                    value={value}
                    onChange={(e) => onChangeValue(e.target.value)}
                />
                {
                    isHiddenPassword ? (
                        <RxEyeClosed
                            className="cursor-pointer absolute top-[1.7rem] z-10 right-2"
                            size={16}
                            onClick={() => setIsHiddenPassword(false)}
                        />
                    ) : (
                        <RxEyeOpen
                            className="cursor-pointer absolute top-[1.7rem] z-10 right-2"
                            size={16}
                            onClick={() => setIsHiddenPassword(true)}
                        />
                    )
                }

            </div>
        </div>
    )
}

export default InputPassword;
