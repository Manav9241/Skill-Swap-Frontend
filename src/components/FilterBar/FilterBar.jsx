import React from 'react';
import './filterbar.css';
const FilterBar = ({ filters , setFilters , handleFilter}) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    return (
        <div className="filter-bar">
            <div style={{display:'flex'}}>
                <div className="filter-group">
                    <label htmlFor="skillsToLearn">Skills to Learn:</label>
                    <input
                        type="text"
                        id="skillsToLearn"
                        name="skillsToLearn"
                        value={filters.skillsToLearn}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="filter-group">
                    <label htmlFor="minTimeToLearn">Min Time to Learn (months):</label>
                    <input
                        type="number"
                        id="minTimeToLearn"
                        name="minTimeToLearn"
                        value={filters.minTimeToLearn}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="filter-group">
                    <label htmlFor="maxTimeToLearn">Max Time to Learn (months):</label>
                    <input
                        type="number"
                        id="maxTimeToLearn"
                        name="maxTimeToLearn"
                        value={filters.maxTimeToLearn}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div style={{display:'flex'}}>
                <div className="filter-group">
                    <label htmlFor="skillsToTeach">Skills to Teach:</label>
                    <input
                        type="text"
                        id="skillsToTeach"
                        name="skillsToTeach"
                        value={filters.skillsToTeach}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="filter-group">
                    <label htmlFor="minTimeToTeach">Min Time to Teach (months):</label>
                    <input
                        type="number"
                        id="minTimeToTeach"
                        name="minTimeToTeach"
                        value={filters.minTimeToTeach}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="filter-group">
                    <label htmlFor="maxTimeToTeach">Max Time to Teach (months):</label>
                    <input
                        type="number"
                        id="maxTimeToTeach"
                        name="maxTimeToTeach"
                        value={filters.maxTimeToTeach}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <button className='filter-group-button' onClick={handleFilter}>Apply Filters</button>
        </div>
    );
}

export default FilterBar;
