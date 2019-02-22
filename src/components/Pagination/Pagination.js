import React from 'react';
import './Pagination.css';

const Pagination = (props) => {
    return (
        <div className="pagination-wrapper">
            <ul className="pagination">
                <li className="page-item">
                    <button className="page-link" aria-label="Previous" onClick={() => props.paginatePreviousData()}>
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </button>
                </li>
                {
                    props.pageNumber.length > 0 && props.pageNumber.map(number => {
                        return (
                            <li
                                className={(props.limit / 10) === number ? "page-item active" : "page-item"}
                                key={number}
                                onClick={() => props.paginateData(number)}>
                                <button className="page-link">{number}</button>
                            </li>
                        );
                    })
                }
                <li className="page-item">
                    <button className="page-link" aria-label="Next" onClick={() => props.paginateNextData()}>
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;