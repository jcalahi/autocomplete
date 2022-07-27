import React from 'react';
import { Col, Row } from 'antd';
import SearchInput from './components/searchInput/SearchInput';
import SearchResult from './components/searchResult/SearchResult';

const SearchMap = () => {
  return (
    <Row>
      <Col span={8}>
        <SearchInput />
      </Col>
      <Col span={16}>
        <SearchResult />
      </Col>
    </Row>
  );
};

export default SearchMap;
