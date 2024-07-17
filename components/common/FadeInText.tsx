import React from 'react';

interface FadeInTextProps {
    text: string[];
    letterDelay?: number; 
    fadeInDuration?: string; 
}

const FadeInText: React.FC<FadeInTextProps> = ({ text, letterDelay = 20, fadeInDuration = '1500ms'}) => {
    return (
        <p className="inline-block">
            {text.map((phrase, phraseIndex) => (
                <React.Fragment key={phraseIndex}>
                    {phrase.split('').map((letter, index) => (
                        <span
                            key={index}
                            style={{
                                animationDelay: `${phraseIndex * 1000 + index * letterDelay}ms`, 
                                animationDuration: fadeInDuration,
                            }}
                            className={`inline-block opacity-0 animate-fadeIn ${letter === ' ' ? 'whitespace-pre' : ''}`}
                        >
                            {letter}
                        </span>
                    ))}
                    {phraseIndex !== text.length - 1 && <br />} 
                </React.Fragment>
            ))}
        </p>
    );
};

export default FadeInText;