import React from 'react';

const FilterInput = (props) => {
  return (
    <div>
      <input
        type="text"
        aria-label="Search"
        placeholder="Type to filter posts..."
        onChange={props.handleInputChange}
      />
      <span className={props.cName}>Posts displayed: {props.postShowing}</span>
    </div>
  )
}

export default FilterInput