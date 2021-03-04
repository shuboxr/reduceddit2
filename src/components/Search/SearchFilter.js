import { setFilter } from '../../store/redditSlice';
import { useDispatch } from 'react-redux';

export const SearchFilter = () => {

    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
        dispatch(setFilter(target.value));
    }

    return (
        <div className="search-filter">
                <select name="filter-select" id="filter-select" onChange={handleChange}>
                    <option value="" disabled defaultValue>Filter Results</option>
                    <option value={0}>Any Ups</option>
                    <option value={1000}>1k+ Ups</option>
                    <option value={10000}>10k+ Ups</option>
                    <option value={20000}>20k+ Ups</option>
                </select>
        </div>
    )
}