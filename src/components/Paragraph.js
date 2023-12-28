import React from 'react';

function Paragraph({ children, className, ...props }) {
    return (
        <div
            className={'font-bold text-[30px] text-dark-gray leading-[45px] text-center ' + (className || '')}
            {...props}
        >
            {children}
        </div>
    );
}

export default Paragraph;
