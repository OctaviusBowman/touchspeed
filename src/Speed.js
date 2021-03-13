import React from 'react';

const Speed = ({ sec, symbols, text, input }) => {
    if (symbols !== 0 && sec !== 0) {
        let wpm = ((input.split(' ').length) / (sec / 60))

        // Calculate's the users speed after a minute of typing
        if (sec >= 60) {

            /***** DEPRICATED CODE FOR NOW *****
            Correct amout of word's typed
            let inputSplit = input.split(' ')
            let textSplit = text.split(' ')

            let filteredText = inputSplit.filter((word, i) => {
                return word === textSplit[i]
            })
            */

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

            // Always one behind
            let rangeTracker = [0];
            let correctWords = [];
            // Compare the character's of the users input, to the character's of the prompt within a given index range
            for (let i = 0; textIndices[i] < inputCharArr.length; i++) {
                let rangeLooper = rangeTracker[i];
                let word = [""];
                let count = 0;

                inputCharArr[inputCharArr.length] = " ";

                while (rangeLooper < textIndices[i]) {
                    if (textCharArr[rangeLooper] === inputCharArr[rangeLooper]) {
                        count = count + 1;
                        if (word[i] === undefined) {
                            word[i] = ""
                        }
                        word[i] = word[i] + `${(inputCharArr[rangeLooper])}`
                    }
                    rangeLooper = rangeLooper + 1;
                }
                // To take in the last character of inputCharArr
                if ((textIndices[i] - rangeTracker[i]) === count) {
                    word[i - 1] = ""
                    correctWords.push(word[i])
                }
                rangeTracker.push(textIndices[i])
            }
            // Remove the first word
            if (inputCharArr[textIndices[0]] !== " ") {
                correctWords.shift()
            }
            return <div className=" font-bold text-blue-900 text-2xl 1080p:text-3xl 1080p:self-center macOld:text-4xl macNew:text-5xl ">{correctWords.length} WPM</div>
        }
        return (
            <div className="font-bold text-blue-900 text-2xl 1080p:text-3xl 1080p:self-center macOld:text-4xl macNew:text-5xl ">{Math.round(wpm)} WPM</div>
        );
    }
    return null;
}

export default Speed;