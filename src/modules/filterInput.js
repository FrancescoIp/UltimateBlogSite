import React from 'react';

const FilterInput = (props) => {
  return (
    <div>
      <input
        type="text" 
        aria-label="Search"
        placeholder="Type to filter posts..."
        onChange={props.handleValueChange}
        // value={props.value}
        />
      <button onClick={props.handleValueChange} value="chiesa">Chiesa</button>
      <button onClick={props.handleValueChange} value="">All</button>
      <span className={props.cName}>Posts displayed: {props.postShowing}</span>
    </div>
  )
}

export default FilterInput