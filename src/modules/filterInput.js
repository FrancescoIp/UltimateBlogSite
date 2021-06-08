import React, { useState, useEffect } from 'react';
import './filterInput.scss'

const FilterInput = (props) => {

  const [textInputClass, setTextInputClass] = useState({
    textInput: "col-6 col-offset-1",
    postShown: "col-3 col-offset-1"
  })
  const [dimension, setDimension] = useState(window.innerWidth)
  useEffect(() => {
    let timeoutId = null;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setDimension(window.innerWidth), 250);
    }
    if(dimension<501){
      setTextInputClass({
        textInput:"col-12",
        postShown:"col-12"
      })
    }else{
      setTextInputClass(
        {
          textInput: "col-6 col-offset-1",
          postShown: "col-3 col-offset-1"
        }
      )
    }

    window.addEventListener('resize', handleResize)

    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  }, [dimension])



  console.log(dimension)
  return (
    <div className="row filter">
      <div className="col-12 button-container">
        <button onClick={props.handleValueChange} value="">All</button>
        <button onClick={props.handleValueChange} value="Chiese">Chiese</button>
        <button onClick={props.handleValueChange} value="Musei">Musei</button>
        <button onClick={props.handleValueChange} value="Cultura">Cultura</button>
        <button onClick={props.handleValueChange} value="">All</button>
        <button onClick={props.handleValueChange} value="Chiese">Chiese</button>
        <button onClick={props.handleValueChange} value="Musei">Musei</button>
        <button onClick={props.handleValueChange} value="Cultura">Cultura</button>
      </div>

      <input
        className={textInputClass.textInput}
        type="text"
        aria-label="Search"
        placeholder="Type to filter posts..."
        onChange={props.handleValueChange}
      />
      <span className={textInputClass.postShown}>Posts displayed: {props.postShowing}</span>


    </div>
  )
}

export default FilterInput