import React from 'react';

const userCard = () => {
    return (
        <div className="flex flew-row items-center ml-4 my-2 rounded-xl p-.5 py-1 justify-between bg-gradient-to-r from-blue-900  to-blue-500 shadow-md ">

            <div className='text-center pl-3'>
                <h1 className="font-light">RANK</h1>
                <h1 className="font-medium">1</h1>
            </div>

            <div className="text-center">
                <img className="w-12" src="/discord_logo.png" alt="" />
                <p className="text-sm font-medium">Tay</p>
            </div>
            <div className='text-center pr-3'>
                <h1 className="font-light">WPM</h1>
                <h1 className="font-medium">72</h1>
            </div>
        </div>
    );
}

export default userCard;