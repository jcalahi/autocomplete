import React from 'react';
import { Col, Row } from 'antd';
import SearchInput from './components/searchInput/SearchInput';
import SearchList from './components/searchList/SearchList';
import SearchResult from './components/searchResult/SearchResult';

const SearchMap = () => {
  return (
    <Row>
      <Col span={8}>
        <SearchInput />
        <SearchList />
      </Col>
      <Col span={16}>
        <SearchResult />
      </Col>
    </Row>
  );
};

export default SearchMap;
