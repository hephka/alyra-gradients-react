import React from 'react';
import { uniqueTags} from './../gradients'

const GradientsSelect = (props) => {
    const { filter, setFilter } = props
    const handleSelectChange = (event) => {
        setFilter(event.target.value)
    }
    return (
        <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Tags</label>
            <select className="form-select" id="select" value={filter} onChange={handleSelectChange}>
                <option value="all">Tous</option>
                {uniqueTags.map((el) => {
                    return (
                        <option key={el}>
                            {el}
                        </option>
                    )
                })}
            </select>
        </div>


    )
}

export default GradientsSelect