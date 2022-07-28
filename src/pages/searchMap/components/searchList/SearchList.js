import React from 'react';
import { connect } from 'react-redux';
import { Avatar, List, Button } from 'antd';
import {
  searchMapOnDelete,
  searchMapOnView
} from '../../../../store/actions/searchMapActions';

const SearchList = ({ searchResults, searchMapOnDelete, searchMapOnView }) => {
  const renderItem = (item) => {
    return (
      <List.Item
        actions={[
          <Button
            key="list-item-view"
            type="link"
            onClick={() => searchMapOnView(item)}
          >
            View
          </Button>,
          <Button
            key="list-item-delete"
            type="link"
            onClick={() => searchMapOnDelete(item.place_id)}
          >
            Delete
          </Button>
        ]}
      >
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

const mapDispatchToProps = { searchMapOnDelete, searchMapOnView };

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);
