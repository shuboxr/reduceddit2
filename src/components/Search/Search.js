import './Search.css';
import { SearchBar } from './SearchBar';
import { SearchFilter } from './SearchFilter';
import { useSelector } from 'react-redux';

export const Search = () => {

    const reddit = useSelector((state) => state.reddit);
    const term = reddit.searchTerm || '';
    const totalResults = reddit.posts.length;
    const filter = reddit.filter;
    const shownResults = reddit.posts.filter(post => {
            return post.ups > filter;
        }).length;

    return (
        <div className="search">
            <div className="search-functions">
                <SearchBar />
                <SearchFilter />
            </div>
            <div className="search-info">
                Displaying
                <span className="search-info-number"> {shownResults} </span>
                Posts{' '}
                <span className="search-info-ups">{filter > 0 ? `With ${filter/1000}k+ Ups` : ''}</span>
                {' '}out of
                <span className="search-info-number"> {totalResults} </span>
                Total Results
                {term === '' ? " from " : " for "}
                <span className="search-term">{term === '' ? "r/popular" : term}</span>:
            </div>
        </div>
    )
}