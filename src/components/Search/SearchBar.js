import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../../store/redditSlice';
import { ImSearch } from 'react-icons/im';

export const SearchBar = () => {

    const dispatch = useDispatch();
    const [ localTerm, setLocalTerm ] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(fetchPosts(localTerm));
    }

    const handleChange = ({target}) => {
        setLocalTerm(target.value);
    }

    const handleEnter = (e) => {
        if (e.keyCode === 13 ) {
            dispatch(fetchPosts(localTerm));
        }
    }

    return (
        <form className="search-bar">
            <button className="search-button" onClick={handleClick}><ImSearch /></button>
            <input className="search-bar-input" placeholder="Enter search term" size={16} type="text" onChange={handleChange} onKeyPress={handleEnter} />
        </form>
    )
}