import React from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import Marker from './components/marker';

const SearchResult = ({ coordinates }) => {

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={process.env.REACT_APP_GOOGLE_API_KEY}
        defaultZoom={16}
        center={coordinates}
      >
        <Marker
          lat={coordinates.lat}
          lng={coordinates.lng}
          text="here"
        />
      </GoogleMapReact>
    </div>
  );
};

const mapStateToProps = ({ searchMap: { coordinates } }) => {
  return { coordinates };
};

export default connect(mapStateToProps)(SearchResult);
