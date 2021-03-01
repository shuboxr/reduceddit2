import { useState } from 'react';

export const SearchBar = () => {

    const [ localTerm, setLocalTerm ] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        console.log(localTerm);
    }

    const handleChange = ({target}) => {
        setLocalTerm(target.value);
    }

    const handleEnter = (e) => {
        if (e.keyCode === 13 ) {
            console.log(localTerm);
        }
    }

    return (
        <form className="search-bar">
            <input placeholder="Enter search term" size={16} type="text" onChange={handleChange} onKeyPress={handleEnter} />
            <button className="search-button" onClick={handleClick}>Search Reddit</button>
        </form>
    )
}