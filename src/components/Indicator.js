import classNames from 'classnames';
import React from 'react';

function Indicator({ difficulty }) {
    return (
        <div
            className={classNames(
                'w-[100px] min-h-[37px] flex justify-center items-center first-letter:uppercase rounded-l-lg rounded-br-lg font-medium text-base text-white mt-[22px]',
                {
                    'bg-[#42A976]': difficulty === 'easy',
                    'bg-[#EAC505]': difficulty === 'medium',
                    'bg-[#EF7D54]': difficulty === 'hard',
                }
            )}
        >
            {difficulty}
        </div>
    );
}

export default Indicator;
