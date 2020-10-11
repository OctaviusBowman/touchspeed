import React from 'react';

const Speed = ({ sec, symbols, text }) => {
    if (symbols !== 0 && sec !== 0) {
        // const totalWords = text.split(' ').length
        console.log(text)
        let wpm = (text) / (sec / 60)
        return (
            <div className="">{Math.round(wpm)} WPM</div>
        );
    }
    return null;
}

export default Speed;