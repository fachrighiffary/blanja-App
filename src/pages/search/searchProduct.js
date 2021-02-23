import React from 'react'
import SearchList from '../../components/body/searchList';
import SearchProductList from '../../components/body/searchList/searchProductList';
import Navbar from '../../components/navbar';

const SearchProduct = (match, history, location) => {
    return (
        <>
            <Navbar  />
            <SearchProductList match={match} history={history} location={location}  />
        </>
    )
}

export default SearchProduct
