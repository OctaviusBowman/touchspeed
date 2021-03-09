import React from 'react'
import UserCard from './userCard'

const Leaderboard = () => {
    return (
        <div className="flex flex-col bg-gray-1000 my-7 col-span-2 -mx-9 items-center rounded-3xl text-white shadow-md border border-white border-opacity-5">
            <h3 className="pt-2 text-2xl font-light tracking-wider ml-3">Leaderboard</h3>
            <div className="flex flex-col mt-4 w-10/12 ml-3">
                <UserCard></UserCard>
                <UserCard></UserCard>
                <UserCard></UserCard>
                <UserCard></UserCard>
                <UserCard></UserCard>
            </div>
        </div>
    )
}

export default Leaderboard
