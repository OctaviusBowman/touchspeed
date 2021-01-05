import React from 'react';

const Speed = ({ sec, symbols, text, input }) => {
    if (symbols !== 0 && sec !== 0) {
        let wpm = ((input.split(' ').length) / (sec / 60))

        // Calculate's the users speed after a minute of typing
        if (sec >= 60) {
            // Correct amout of word's typed
            let inputSplit = input.split(' ')
            let textSplit = text.split(' ')

            //TODO: Add logic that compares textSplit length and inputSplit length at each value mathces, if they aren't another
            // filter comparison is needed that checks the character index's [indexOf()]
            let filteredText = inputSplit.filter((word, i) => {
                return word === textSplit[i]
            })
        

            // return <div className="wpm">{filteredText.length} WPM with {inputSplit.length - filteredText.length} errors</div>
            return <div className="wpm">{filteredText.length} WPM</div>
        }

        return (
            <div className="wpm">{Math.round(wpm)} WPM</div>
        );
    }
    return null;
}

export default Speed;