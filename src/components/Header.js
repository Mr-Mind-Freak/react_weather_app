import React,{ useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import Data from '../DataContext';

const Header = () => {
    const { location, setlocation, handleInputBox, collectData } = useContext(Data);

    return (
        <header>
            <img 
                src={require('../assets/icons/clearIcon.png')}
                width={100}
                height={100}
                alt="What's Weather logo"
                title="What's Weather"
            />
            <h1>what's weather</h1>
            <button className='search-btn' onClick={handleInputBox}>
                <FaSearch />
            </button>   
            <input 
                id='input_box'
                className='input_box'
                type='text'
                placeholder='Search here...'
                value={location}
                onChange={evt => {setlocation(evt.target.value)}} 
                onKeyDown={collectData}
            />
        </header>
    )
}

export default Header;