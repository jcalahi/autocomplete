import React from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627
  },
  zoom: 15
};

const SearchResult = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={process.env.REACT_APP_GOOGLE_API_KEY}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      />
    </div>
  );
};

const mapStateToProps = ({}) => {
  return {};
};

export default connect(mapStateToProps)(SearchResult);
