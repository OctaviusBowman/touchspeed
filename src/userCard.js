import React from 'react';

const userCard = () => {
    return (
        <div className="flex flew-row items-center ml-4 my-2 1080p:my-3 rounded-xl p-.5 py-1 justify-between bg-gradient-to-r from-blue-900  to-blue-500 shadow-md 1080p:text-xl ">

            <div className='text-center pl-3'>
                <h1 className="font-light">RANK</h1>
                <h1 className="font-medium">#</h1>
            </div>

            <div className="text-center">
                <img className="w-12 rounded-full border border-purple-500" src="/discord_logo.png" alt="" />
                <p className="text-sm 1080p:text-base font-medium">###</p>
            </div>
            <div className='text-center pr-3'>
                <h1 className="font-light">WPM</h1>
                <h1 className="font-medium">#</h1>
            </div>
        </div>
    );
}

export default userCard;