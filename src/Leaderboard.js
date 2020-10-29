import React from 'react'
import UserCard from './userCard'

const Leaderboard = () => {
    return (
        <div className="leaderboard">
            <h3 className="leaderboard-title">
                Leaderboard
            </h3>
            <div className="leaderboard-body mt-4">
                <UserCard></UserCard>
                {/* <UserCard></UserCard>
                <UserCard></UserCard>
                <UserCard></UserCard>
                <UserCard></UserCard> */}
            </div>
        </div>
    )
}

export default Leaderboard
