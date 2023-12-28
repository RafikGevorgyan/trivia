import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import Title from '../components/Title';

function Result() {
    const {
        state: { correctAnswers, allAnswers },
    } = useLocation();

    const navigate = useNavigate();

    return (
        <div className='flex flex-1 flex-col items-center'>
            <Title>Thank You</Title>
            <Paragraph className={'mt-[146px]'}>
                Your Score: {correctAnswers}/{allAnswers}
            </Paragraph>
            <Button
                className={'mt-[100px]'}
                onClick={() => navigate('/')}
            >
                Back to Home
            </Button>
        </div>
    );
}

export default Result;
