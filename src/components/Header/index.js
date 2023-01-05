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
            <a className="header-link" href="#">
                <h1 className="header-text">
                🎞️🍿Full On Flicks🎬🎥
                </h1>
            </a>
            <form onSubmit={handleSubmit}>
                <input type="text" className="search" value={inputText} onChange={handleChange}>
                    Search for Movies or TV Shows
                </input>
                <input type="submit" className="search-btn">
                    SEARCH
                </input>
            </form>
        </div>
    );
}

export default Header;
