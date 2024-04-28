import React, { useState } from 'react';
import './styles.css'
const FaqComponent = () => {
    const [isOpen, setIsOpen] = useState({});

    const toggleAnswer = (id) => {
        setIsOpen(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const QuestionButton = ({ question, answer, isOpen, onClick }) => {
        return (
            <div className="rounded-xl p-px bg-gradient-to-r from-[#217EEC] to-[#082299]">
                <div className="bg-white rounded-xl ">
                    <button className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-sm font-bold text-slate-800 focus:outline-none p-4" onClick={onClick}>
                        <span>{question}</span>
                        <svg className={`mt-1.5 md:mt-0 flex-shrink-0 ${isOpen ? 'rotate-180' : ''} h-5 w-5 text-[#5B5675]`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                        </svg>
                    </button>
                    {isOpen && <div className="answer pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium">{answer}</div>}

                </div>



            </div>
        );
    };

    return (
        <div className="">
            <p className='md:text-4xl text-3xl flex justify-start font-bold bg-gradient-to-b from-[#06286E] to-[#164EC0] text-transparent bg-clip-text'>FAQ</p>
            <section className="max-w-4xl sm:py-5">
                <div className="w-full py-4">
                    <div className=" bg-white space-y-5">
                        <QuestionButton
                            question="Can education flashcards be used for all age groups?"
                            answer="Your answer!"
                            isOpen={isOpen['answer-1']}
                            onClick={() => toggleAnswer('answer-1')}
                        />
                        <QuestionButton
                            question="How do education flashcards work??"
                            answer="Your answer!"
                            isOpen={isOpen['answer-2']}
                            onClick={() => toggleAnswer('answer-2')}
                        />
                        <QuestionButton
                            question="Can education flashcards be used for test preparation??"
                            answer="Your answer!"
                            isOpen={isOpen['answer-3']}
                            onClick={() => toggleAnswer('answer-3')}
                        />

                    </div>
                </div>
            </section>
        </div>
    );
};

export default FaqComponent;
