import React from 'react';

const Card = ( { name, username } ) =>{

    return(
        <div className='Card dib grow bw2'>
            <img 
                className="profileImg" 
                src={`https://robohash.org/${username}?set=set4`} 
                alt="Username"          
            />
            <div className='CardText'>
                <h2> {username} </h2>
                <p> {name} </p>
            </div>
            
        </div>
    );
}

export default Card;