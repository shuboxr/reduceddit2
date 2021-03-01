import './Search.css';
import { SearchBar } from './SearchBar';
import { SearchFilter } from './SearchFilter';

export const Search = () => {
    return (
        <div className="search">
            <div className="search-functions">
                <SearchBar />
                <SearchFilter />
            </div>
            <div className="search-info">
                Search Results for Godot:
            </div>
        </div>
    )
}