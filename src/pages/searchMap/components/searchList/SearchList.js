import React from 'react';
import { connect } from 'react-redux';
import { Avatar, List } from 'antd';

const SearchList = ({ searchResults }) => {
  const renderItem = (item) => {
    return (
      <List.Item
        actions={[
          <a key="list-item-view">View</a>,
          <a key="list-item-delete">Delete</a>
        ]}>
          <List.Item.Meta
            avatar={<Avatar src={item.icon} />}
            title={item.name}
            description={item.formatted_address}
          />
      </List.Item>
    );
  };

  if (searchResults.length === 0) return null;

  return <List dataSource={searchResults} renderItem={renderItem} />;
};

const mapStateToProps = ({ searchMap: { searchResults } }) => {
  return { searchResults };
};

export default connect(mapStateToProps)(SearchList);
