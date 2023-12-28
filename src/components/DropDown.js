import classNames from 'classnames';
import React, { useState } from 'react';

function DropDown({ values = [], title, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('');

    function handleClick(value) {
        setSelected(value.title);
        onChange(value);
        setIsOpen(false);
    }

    return (
        <div className='relative'>
            <button
                id='dropdownDefaultButton'
                data-dropdown-toggle='dropdown'
                className={classNames(
                    'w-[320px] bg-white border hover:border-light-green  hover:text-green hover:bg-light-green rounded-lg text-sm px-5 py-2.5 flex justify-between items-center mt-[36px]',
                    {
                        'text-gray border-gray': !isOpen && !selected,
                        'border-green text-dark-gray': isOpen,
                        'border-light-green text-dark-gray': !isOpen && selected,
                    }
                )}
                type='button'
                onClick={() => setIsOpen((bool) => !bool)}
            >
                {selected || title}
                <svg
                    className={classNames('w-2.5 h-2.5 ms-3 transition-transform', {
                        'rotate-180': isOpen,
                        'rotate-0': !isOpen,
                    })}
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 10 6'
                >
                    <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='m1 1 4 4 4-4'
                    />
                </svg>
            </button>

            <div
                id='dropdown'
                className={classNames(
                    'z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-[320px] mt-1',
                    {
                        hidden: !isOpen,
                    }
                )}
            >
                <ul
                    className='w-320 text-sm text-dark-gray'
                    aria-labelledby='dropdownDefaultButton'
                >
                    {values.map((value) => (
                        <li key={value.id}>
                            <div
                                className='block px-4 py-2 hover:bg-light-gray hover:text-green m-2 rounded-lg cursor-pointer'
                                onClick={() => handleClick(value)}
                            >
                                {value.title}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default DropDown;
