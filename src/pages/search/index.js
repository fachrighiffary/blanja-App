import React from 'react'
import SearchList from '../../components/body/searchList';
import Navbar from '../../components/navbar';

const Search = (match, history, location) => {
    return (
        <>
            <Navbar  />
            <SearchList match={match} history={history} location={location}  />
        </>
    )
}

export default Search
