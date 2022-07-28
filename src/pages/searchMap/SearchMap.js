import React from 'react';
import SearchInput from './components/searchInput/SearchInput';
import SearchList from './components/searchList/SearchList';
import SearchResult from './components/searchResult/SearchResult';
import './styles.css';

const SearchMap = () => {
  return (
    <div className="container">
      <div className="search-box">
        <SearchInput />
        <SearchList />
      </div>
      <SearchResult />
    </div>
  );
};

export default SearchMap;
