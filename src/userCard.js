import React from 'react';

const userCard = () => {
    return ( 
        <div className="card bg-primary">
            <div className="row">
                <img className="avatar" src="/discord_logo.png" alt=""/>
                <p className="card-name">Name</p>
            </div>
        </div>
     );
}
 
export default userCard;