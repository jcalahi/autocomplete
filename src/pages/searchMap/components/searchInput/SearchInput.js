import React, { useRef, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { setPlace } from '../../../../store/actions/searchMapActions';

const SearchInput = ({ setPlace }) => {
  const inputRef = useRef();
  const googleMapsRef = useRef();

  const handlePlaceChanged = useCallback(() => {
    inputRef.current.value = '';

    const place = googleMapsRef.current.getPlace();
    setPlace(place);
  }, [setPlace]);

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

const mapDispatchToProps = { setPlace };

export default connect(null, mapDispatchToProps)(SearchInput);
