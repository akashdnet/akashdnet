"use client";

import { useEffect, useState } from "react";

const Typewriter = ({ words }: { words: string[] }) => {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typeSpeed, setTypeSpeed] = useState(100);

    useEffect(() => {
        const type = () => {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                setText(currentWord.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
                setTypeSpeed(50);
            } else {
                setText(currentWord.substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
                setTypeSpeed(100);
            }

            if (!isDeleting && charIndex === currentWord.length) {
                setIsDeleting(true);
                setTypeSpeed(2000);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setWordIndex(prev => (prev + 1) % words.length);
                setTypeSpeed(500);
            }
        };

        const timer = setTimeout(type, typeSpeed);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, wordIndex, words, typeSpeed]);

    return (
        <span id="typewriter" className="text-secondary border-r-2 border-secondary animate-blink">
            {text}
        </span>
    );
};

export default Typewriter;
