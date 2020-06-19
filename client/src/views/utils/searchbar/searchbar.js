import React, { useState, useEffect } from 'react'

import { GrSearch } from 'react-icons/gr'
import { useHistory } from "react-router-dom";
import SearchForm from '../../products-page/searchForm'

import './searchbar.css'


function SearchBar() {
    const [SearchTerms, setSearchTerms] = useState("");
    const { updateSearchTerms } = SearchForm();
    const history = useHistory();

    useEffect(() => {
        console.log("hona");
    }, [SearchTerms]);

    const handleSearchChange = (event) => {
        setSearchTerms(event.currentTarget.value)
    }

    const handleSearchClick = () => {
        setSearchTerms([...SearchTerms])        
        history.push({ pathname: "/products", search: `q=${SearchTerms}` })
        updateSearchTerms(SearchTerms)
    }

    return (
        <div className="searchbar-container">

            <div className="search-set" tabindex="0" >
                <input
                    type="search"
                    className="search-input"
                    onChange={handleSearchChange}
                    placeholder="Search"
                />
                <button
                    className="search-btn"
                    type="submit"
                    onClick={handleSearchClick}
                >
                    <i><GrSearch /></i>
                </button>
            </div>

        </div>
    )
}

export default SearchBar;