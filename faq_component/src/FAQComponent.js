import React from 'react';
import FAQItem from './FAQItem';

const FAQComponent = ({ questions }) => {

    return (
        <div className='FAQ-container'>
            <h1>Frequently Asked Questions</h1>
            { questions.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} isOpen={index === 0} />
            ))}
        </div>
    )
};

export default FAQComponent;