import React ,{ useState } from 'react';

const Card = ( { name, username } ) =>{

    const [isFollowed, setFollow] = useState(false);
    const isClicked = () => {
            setFollow(!isFollowed);
            return isFollowed
    };
    return(
        <div onClick = {isClicked} className={`Card dib grow bw2 ${isFollowed ? "Followed" : ""}`}>
             
            <img 
                className="profileImg" 
                src={`https://robohash.org/${username}?set=set4`} 
                alt="Username"          
            />
            <div className='CardText'>
                <h2> {username} </h2>
                <p> {name} </p>
                <div className = "follow" >{isFollowed ? "Followed" : "Follow"}</div>
            </div>
            
        </div>
    );
}

export default Card;