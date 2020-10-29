import React from 'react';

const userCard = () => {
    return (
        <div className="card bg-primary">
            <div className="row">
                <img className="avatar" src="/discord_logo.png" alt="" />
                <div className="col card-text">
                    {/* <p id="name">Name</p> */}
                    <p id="name">Coming Soon</p>
                    {/* <p>WPM: {55}</p>
                    <p>10/28/2020</p> */}
                </div>
            </div>
        </div>
    );
}

export default userCard;