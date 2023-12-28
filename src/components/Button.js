import React from 'react';

function Button({ onClick, disabled, children, className }) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={
                'text-center text-white px-10 py-2.5 bg-green hover:bg-[#2E6A4B] disabled:border-light-gray disabled:text-light-gray disabled:bg-white bold font-bold text-lg rounded-lg ' +
                (className || '')
            }
        >
            {children}
        </button>
    );
}

export default Button;
