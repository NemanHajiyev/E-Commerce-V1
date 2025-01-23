import React from 'react'
import '../../Styles/Select.css'

const Select = ({ setSelect }) => {
    return (
        <div className='select-div'>
            <select onChange={(e) => setSelect(e.target.value)} name="" id="select">
                <option value="" disabled selected hidden >Qiymet</option>
                <option value="inc">Artan</option>
                <option value="dec">Azalan</option>
            </select>
        </div>
    )
}

export default Select
