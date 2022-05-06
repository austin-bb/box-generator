import React, { useState } from 'react'

const BoxColors = (props) => {
    const [boxColor, setBoxColor] = useState("");
    

    const newBox = (e) => {
        e.preventDefault();
        props.setBoxes([...props.boxes, boxColor]);
        setBoxColor("");
    }

    return (
        <div className='App'>
            <form onSubmit={ newBox } className='Form'>
                <label>Color: </label>
                <input onChange={(e) => { setBoxColor(e.target.value) }} type="text" value={ boxColor }/>
                <button>Add</button>
            </form>

        </div>
    )
}

export default BoxColors





