import React from 'react';
import Card from './Card';


const CardList = ({ users }) => {

  return (
    <div className='CardList tc'>
      {
        users.map(( user, i ) => {
          return(
            <Card 
              key ={users[i].id}
              name = {users[i].name}
              username = {users[i].username}  
            />
          );
        })
      }
    </div>
  );
}

export default CardList;
