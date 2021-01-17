import React from 'react';

const Speed = ({ sec, symbols, text, input }) => {
    if (symbols !== 0 && sec !== 0) {
        let wpm = ((input.split(' ').length) / (sec / 60))

        // Calculate's the users speed after a minute of typing
        if (sec >= 60) {
            // Correct amout of word's typed
            let inputSplit = input.split(' ')
            let textSplit = text.split(' ')

            let filteredText = inputSplit.filter((word, i) => {
                return word === textSplit[i]
            })

            // Logic to count spaces in the given prompt text
            let textIndices = [];
            let textCharArr = text.split('');
            let textElement = ' ';
            let textIdx = textCharArr.indexOf(textElement);
            while (textIdx !== -1) {
                textIndices.push(textIdx);
                textIdx = textCharArr.indexOf(textElement, textIdx + 1);
            }

            // Logic to count spaces in the given user input
            let inputIndices = [];
            let inputCharArr = input.split('');
            let inputElement = ' ';
            let inputIdx = inputCharArr.indexOf(inputElement);
            while (inputIdx !== -1) {
                inputIndices.push(inputIdx);
                inputIdx = inputCharArr.indexOf(inputElement, inputIdx + 1);
            }

            // console.log(inputCharArr.length)

            let rangeTracker = [0];
            // Compare the character's of the users input, to the character's of the prompt within a given index range
            for (let i = 0; textIndices[i] < inputCharArr.length; i++) {
                console.log(rangeTracker)
                console.log(textIndices[i])
                rangeTracker.push(textIndices[i])
                // Figure out the logic that goes here
            }



            // return <div className="wpm">{filteredText.length} WPM with {errorIndex - filteredString} characters incorrect</div>
            return <div className="wpm">{filteredText.length} WPM</div>
        }

        return (
            <div className="wpm">{Math.round(wpm)} WPM</div>
        );
    }
    return null;
}

export default Speed;