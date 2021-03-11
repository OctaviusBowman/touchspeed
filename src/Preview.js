import React from 'react';

const Preview = ({ text, userInput }) => {
    return (
        <div className="border border-white border-opacity-5 text-white bg-gray-1000 rounded-xl 1080p:rounded-2xl m-3 p-4 shadow-md 1080p:text-3xl 1080p:mb-8 1080p:pb-20">
            {
                text.split('').map((character, index) => {
                    let color;
                    if (index < userInput.length) {
                        // color = (character === userInput[index]) ? '#33E1FF' : '#BDBDBD'
                        color = (character === userInput[index]) ? '#05aad3' : '#8B5CF6'
                    }
                    return <span  key={index} style={{ backgroundColor: color }}>{character}</span>
                })
            }
        </div>
    );
}


export default Preview;