import React from 'react';

const FAQItem = ({ question, answer, isOpen }) => (
    <details className='FAQ-item' open={isOpen}>
        <summary className='FAQ-item--question'>
            {question}
        </summary>
        <div className='FAQ-item--answer'>
            <p>{answer}</p>
        </div>
    </details>
)

export default FAQItem;