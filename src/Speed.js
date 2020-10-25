import React from 'react';

const Speed = ({ sec, symbols, text, input}) => {
    if (symbols !== 0 && sec !== 0) {
        let wpm = (text.split(' ').length) / (sec / 60)

        // Calculate's the users speed after a minute of typing
        if (sec >= 60) {
            wpm = input.split(' ').length;
        }

        return (
            <div className="wpm">{Math.round(wpm)} WPM</div>
        );
    }
    return null;
}

export default Speed;