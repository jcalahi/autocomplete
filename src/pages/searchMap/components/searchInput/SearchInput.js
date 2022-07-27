import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';

const SearchInput = () => {
  const inputRef = useRef();
  let googleMapsApi;

  const handlePlaceChanged = () => {
    const place = googleMapsApi.getPlace();
    // dispatch an action
  };

  useEffect(() => {
    googleMapsApi = new window.google.maps.places.Autocomplete(inputRef.current);
    const mapListener = googleMapsApi.addListener('place_changed', handlePlaceChanged);
    return () => {
      googleMapsApi.removeListener(mapListener);
    };
  }, []);

  return (
    <input
      ref={inputRef}
      className="ant-input"
      placeholder="Search for places"
    />
  );
};

const mapDispatchToProps = {};

export default connect(null, mapDispatchToProps)(SearchInput);
