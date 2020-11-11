import React from 'react';

const SearchBox = ({searchfield , searchChange}) => {
    return(
        <div className='SearchBoxContainer'>
            <input className='SearchBox'
                type="search" 
                placeholder="Search kittens" 
                onChange= {searchChange} 
                /> 
                {/* <i className="fa fa-search"></i>  */}
        </div>   
    );
}

export default SearchBox;