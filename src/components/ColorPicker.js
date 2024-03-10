import React from 'react'

function ColorPicker(props) {
  return (
    <div className={`container my-2 ${props.mode}`}>
        <label htmlFor="colorPicker">Pick a colour for background : </label>
        <input type="color" className='mx-2' onChange={(e) => {
            props.changeColor(e.target.value);
        }} value={props.color}  />
    </div>
  )
}

export default ColorPicker
