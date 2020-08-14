import React, { useState } from 'react'

import './Pagination.css'

function Pagination({ postsPerPage, totalPosts, paginate }) {
    const [CurrentPage, setCurrentPage] = useState(1);
    
    const pageNumbers = [];
    const numberOfPages = Math.ceil(totalPosts / postsPerPage);

    for (let i = 1; i <= numberOfPages; i++) {
        pageNumbers.push(i);
    }
    
    function PaginationElement ({number}){
        const handleClick = (pageNumber) => {
            paginate(pageNumber);
            setCurrentPage(pageNumber)
        }

        return (
            <li className="pagination-item">
                <button
                    className={CurrentPage === number ? 'active-btn' : 'default-btn'}
                    onClick={() => handleClick(number)}
                >
                    {number}
                </button>
            </li>
        )
    }

    return (
        <div className="paginaton-container horizontal-layout">
            <div className="counter">
                Page {CurrentPage} of {numberOfPages}
            </div>
            <div>
                <ul className="pagination-list horizontal-layout">
                    {pageNumbers.map((number, index) =>
                        <PaginationElement number={number}  key={index}/>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Pagination;