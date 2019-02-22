import React from 'react';

const Search = (props) => {
    return (
        <div className="Emoji-page-wrapper">
            <form className="form col-md-12">
                <input
                    type="text"
                    className="form-control"
                    onChange={(event) => props.inputChangeHandler(event)}
                    placeholder="Search Emoji"
                />
            </form>
        </div>
    );
};

export default Search;