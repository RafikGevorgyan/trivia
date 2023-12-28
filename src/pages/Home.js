import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import DropDown from '../components/DropDown';
import Paragraph from '../components/Paragraph';
import Title from '../components/Title';

const values = [
    {
        title: 'Animals',
        id: 27,
    },
    {
        title: 'Geography',
        id: 22,
    },
    {
        title: 'Science & Nature',
        id: 17,
    },
    {
        title: 'Sports',
        id: 12,
    },
];

function Home() {
    const [slelctedCategory, selectCategory] = useState(null);
    const navigate = useNavigate();

    return (
        <div className='flex flex-col flex-1 items-center'>
            <Title>Trivia App</Title>
            <Paragraph className={'mt-[146px]'}>Pick a Category</Paragraph>
            <DropDown
                values={values}
                title={'Category'}
                onChange={selectCategory}
            />
            <Button
                disabled={!slelctedCategory}
                onClick={() => navigate(`/quiz/${slelctedCategory.id}`)}
                className={'mt-[100px]'}
            >
                Start
            </Button>
        </div>
    );
}

export default Home;
