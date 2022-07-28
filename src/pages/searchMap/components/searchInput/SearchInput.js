import React, { useRef, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { searchMapOnPlaceChanged } from '../../../../store/actions/searchMapActions';

const SearchInput = ({ searchMapOnPlaceChanged }) => {
  const inputRef = useRef();
  const googleMapsRef = useRef();

  const handlePlaceChanged = useCallback(() => {
    const place = googleMapsRef.current.getPlace();
    inputRef.current.value = '';
    searchMapOnPlaceChanged(place);
  }, [searchMapOnPlaceChanged]);

  useEffect(() => {
    googleMapsRef.current = new window.google.maps.places.Autocomplete(inputRef.current);
    const mapListener = googleMapsRef.current.addListener('place_changed', handlePlaceChanged);

    return () => {
      googleMapsRef.current.removeListener(mapListener);
    };
  }, [handlePlaceChanged]);

  return (
    <input
      ref={inputRef}
      className="ant-input"
      placeholder="Search for places"
    />
  );
};

const mapDispatchToProps = { searchMapOnPlaceChanged };

export default connect(null, mapDispatchToProps)(SearchInput);
