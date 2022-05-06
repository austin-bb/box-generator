import React, { useState } from 'react'

const BoxColors = (props) => {
    const [boxColor, setBoxColor] = useState("");
    const [boxes, setBoxes] = useState([]);

    const newBox = (e) => {
        e.preventDefault();
        setBoxes([...boxes, boxColor]);  
    }

    return (
        <div className='App'>
            <form onSubmit={ newBox } className='Form'>
                <label>Color: </label>
                <input onChange={(e) => { setBoxColor(e.target.value) }} type="text" />
                <button>Add</button>
            </form>

            <div style={{ display: "flex" }}>
            {
                boxes.map((color, i) => {
                return <div key={i} style={{ backgroundColor: color, width: 200, height: 200, marginRight: 30 }}></div>
                } )
            }
            </div>
        </div>
    )
}

export default BoxColors





