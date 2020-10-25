import React from 'react';

const Preview = ({ text, userInput }) => {
    return (
        <div className="border rounded p-3 mb-3 preview-css">
            {
                text.split('').map((character, index) => {
                    let color;
                    if (index < userInput.length) {
                        // color = (character === userInput[index]) ? '#33E1FF' : '#BDBDBD'
                        color = (character === userInput[index]) ? '#05aad3' : '#BDBDBD'
                    }
                    return <span key={index} style={{ backgroundColor: color }}>{character}</span>
                })
            }
        </div>
    );
}


export default Preview;