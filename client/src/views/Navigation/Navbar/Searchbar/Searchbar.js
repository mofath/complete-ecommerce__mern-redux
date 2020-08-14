import React, { useState, useEffect } from 'react'

import { GrSearch } from 'react-icons/gr'
import { useHistory } from "react-router-dom";
import SearchForm from '../../../Screens/Home/searchForm'

import './Searchbar.css'


function SearchBar() {
    const [SearchTerms, setSearchTerms] = useState("");
    const { updateSearchTerms } = SearchForm();
    const history = useHistory();

    useEffect(() => { }, [SearchTerms]);

    const handleSearchChange = (event) => { setSearchTerms(event.currentTarget.value) }


    const handleSearchClick = (event) => {
        setSearchTerms(event.currentTarget.value)
        history.replace({ pathname: "/home", search: `q=${SearchTerms}` })
        updateSearchTerms(SearchTerms)
        // search: "?" + new URLSearchParams({clientId: clientId}).toString()
    }

    return (
        <div className="searchbar-container">
            <input type="search" onChange={handleSearchChange} placeholder="Search" />
            <button
                onClick={() => handleSearchClick()}
            > <i><GrSearch size="20" /></i></button>
        </div>
    )
}

export default SearchBar;