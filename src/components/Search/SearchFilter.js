export const SearchFilter = () => {

    const handleChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <div className="search-filter">
                <label htmlFor="filter-select">Apply Filter:</label>
                <select name="filter-select" id="filter-select" onChange={handleChange}>
                    <option value={0}>no filter</option>
                    <option value={1000}>1k+ ups</option>
                    <option value={10000}>10k+ ups</option>
                    <option value={20000}>20k+ ups</option>
                </select>
        </div>
    )
}