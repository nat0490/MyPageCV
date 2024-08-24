import React from 'react';

interface FadeInTextProps {
    text: string[];
    wordDelay ?: number; 
    fadeInDuration?: string; 
}

const FadeInText: React.FC<FadeInTextProps> = ({ text, wordDelay  = 200, fadeInDuration = '1500ms'}) => {
    return (
        <p className="inline-block">
            {text.map((phrase, phraseIndex) => (
                <React.Fragment key={phraseIndex}>
                    {phrase.split(' ').map((word, wordIndex) => (
                        <React.Fragment key={wordIndex}>
                            <span
                                style={{
                                    animationDelay: `${phraseIndex * 1000 + wordIndex * wordDelay }ms`,
                                    animationDuration: fadeInDuration,
                                }}
                                className={`inline-block opacity-0 animate-fadeIn`}
                            >
                                {word}
                            </span>
                            {/* Ajout d'un espace après chaque mot */}
                            {wordIndex !== phrase.split(' ').length - 1 && ' '}
                        </React.Fragment>
                    ))}
                    {phraseIndex !== text.length - 1 && <br />}
                </React.Fragment>
            ))}
        </p>
    );
};

export default FadeInText;