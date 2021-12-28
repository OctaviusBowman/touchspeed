import React from 'react'
import UserCard from './userCard'

const Leaderboard = () => {
    return (
        <div className="flex flex-col bg-gray-1000 my-7 macAir:h-4/6 macAir:pt-6 1080p:h-3/5 macOld:h-1/2 1080p:pt-8 pt-4 col-span-2 -mx-9 items-center rounded-3xl text-white shadow-md border border-white border-opacity-5">
            <h3 className="pt-2 text-2xl 1080p:text-4xl 4k:text-6xl macOld:text-5xl font-light tracking-wider ml-3">Leaderboard</h3>
            <div className="flex flex-col mt-4 1080p:mt-8 w-10/12 ml-3">
                {/* Import data from react-persit or database into UserCard [data will also have to be passed in through the leaderboard component] */}
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
