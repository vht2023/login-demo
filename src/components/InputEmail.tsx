import React from 'react';

interface Props {
    value: string;
    onChangeValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputEmail: React.FC<Props> = ({ value, onChangeValue }) => {
    return (
        <div className="sm:w-1/2 w-full leading-none">
            <p>Email</p>
            <input
                required
                autoComplete="false"
                type="text"
                className="p-4 mt-2 w-full border-1 border-black focus:bg-white bg-gray-100"
                value={value}
                onChange={(e) => onChangeValue(e.target.value)}
            />
        </div>
    )
}

export default InputEmail;
