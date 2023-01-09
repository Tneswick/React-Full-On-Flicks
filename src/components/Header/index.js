import React, { useState } from 'react';

function Header() {

    const [inputText, setInputText] = useState('');

    const handleChange = (event) => {
        setInputText({...inputText, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setInputText('')
    };
    
    return (
        <div className="header-wrapper">
            <h1 className="header-text">
                🎞️🍿Full On Flicks🎬🎥
            </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" className="search" value={inputText} onChange={handleChange} placeholder="Search for Movies or TV Shows"/>
                <input type="submit" className="search-btn" />
            </form>
        </div>
    );
}

export default Header;
