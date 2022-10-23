import React from 'react'

export const TrendingFilters = (props) => {

    const changeFilter = (filter) => {
        if (filter === props.filter) {
            return;
        } else props.setFilter(filter);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="btn-group my-3" role="group" aria-label="nav-title"  >
                    <button type="button" className="btn btn-outline-primary" onClick={() => changeFilter("all")}>All</button>
                    <button type="button" className="btn btn-outline-primary" onClick={() => changeFilter("tv")}>Series</button>
                    <button type="button" className="btn btn-outline-primary" onClick={() => changeFilter("movie")}>Movies</button>
                </div>
            </div>
        </div>
    )
}