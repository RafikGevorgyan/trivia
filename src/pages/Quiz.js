import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Indicator from '../components/Indicator';
import Loader from '../components/Loader';
import Paragraph from '../components/Paragraph';
import Title from '../components/Title';

const API = 'https://opentdb.com/api.php';

function randomInsertion(arr, val) {
    const randomIndex = Math.round(Math.random() * arr.length);
    return arr.toSpliced(randomIndex, 0, val);
}

function Quiz() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoadng] = useState(true);
    const [questionNumber, setQusetionNumber] = useState(1);
    const correctAnswersCount = useRef(0);

    const navigate = useNavigate();

    useEffect(() => {
        const url = API + '?amount=10&category=' + id;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data.results))
            .finally(() => setIsLoadng(false))
            .catch((err) => console.error(err));
    }, [id]);

    if (isLoading) {
        return <Loader />;
    }

    const { incorrect_answers, correct_answer, question, difficulty } = data[questionNumber - 1];
    const options = randomInsertion(incorrect_answers, correct_answer);

    function handleAnswer(option) {
        if (option === correct_answer) {
            correctAnswersCount.current++;
        }

        if (data.length === questionNumber) {
            navigate('/result', { state: { correctAnswers: correctAnswersCount.current, allAnswers: data.length } });
            return;
        }
        setQusetionNumber((num) => num + 1);
    }

    return (
        <div className='flex flex-col flex-1 items-center'>
            <Title>Questions 0{questionNumber}</Title>
            <Indicator difficulty={difficulty} />
            <Paragraph
                dangerouslySetInnerHTML={{ __html: question }}
                className={'max-w-8/12 mt-[76px]'}
            ></Paragraph>
            <div className='flex flex-wrap w-8/12  max-[1780px]:w-1/2 justify-around items-center mt-[50px] '>
                {options.map((option) => (
                    <div
                        key={option}
                        onClick={() => handleAnswer(option)}
                        className='w-[290px] h-[56px] bg-white border-2 border-green text-dark-gray hover:border-light-green  hover:text-green hover:bg-light-green rounded-lg text-sm flex justify-center items-center text-[18px] font-bold cursor-pointer mb-2 p-2'
                        dangerouslySetInnerHTML={{ __html: option }}
                    />
                ))}
            </div>
        </div>
    );
}

export default Quiz;
