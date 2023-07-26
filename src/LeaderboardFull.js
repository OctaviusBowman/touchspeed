import React, { useEffect, useState } from 'react';

const UserCard = () => {

    const [name, setName] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost:5000/profiles')
            result.json().then(json => { setName(json) })
        }
        fetchData()
    }, [])

    return (
        <div className="flex flew-row items-center ml-4 my-2 macNew:my-4 macNew:py-3 macOld:py-2 4k:text-4xl 4k:px-4 4k:py-5 1080p:my-3 rounded-xl p-.5 py-1 justify-between bg-gradient-to-r from-blue-900 macNew:text-2xl to-blue-500 shadow-md 1080p:text-xl ">

            <div className='text-center pl-3'>
                <h1 className="font-light">RANK</h1>
                <h1 className="font-medium">#</h1>
            </div>

            <div className="text-center">
                <img className="w-12 rounded-full border 4k:w-20 border-purple-500" src="/discord_logo.png" alt="" />
                <div className="text-sm 1080p:text-base 4k:text-2xl font-medium">
                    {name.map(item => <p key={item._id}>{item.name}</p>)}
                </div>
            </div>
            <div className='text-center pr-3'>
                <h1 className="font-light">WPM</h1>
                <h1 className="font-medium">#</h1>
            </div>
        </div>
    );
}

export default UserCard;