import React from 'react'

import { GrSearch } from 'react-icons/gr'

import './searchbar.css'

const SearchBar = () => {
    return (
        <div className="search-input-container">
        <div className="container ">
            

                <div className="input-group search-set"  tabindex="0" >
                    <input
                        type="text"
                        className="form-control search-input"
                        placeholder="Search"
                    />
                    <button className="btn btn-default search-btn" type="submit">
                        <i><GrSearch /></i>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default SearchBar;