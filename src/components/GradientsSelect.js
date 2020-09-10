import React from 'react';

const GradientsSelect = (props) => {
    const { filter, setFilter } = props
    const handleSelectChange = (event) => {
        setFilter(event.target.value)
    }
    return (
        <div className="input-group mb-3">
      <label className="input-group-text" htmlFor="select">
        Filtrer par tag
      </label>
      <select className="form-select" id="select" value={filter} onChange={handleSelectChange}>
          {/* eslint-disable-next-line */}
        <option value="all">Tous 📜</option>
        {/* eslint-disable-next-line */}
        <option value="completed">Terminées 👍</option>
        {/* eslint-disable-next-line */}
        <option value="notcompleted">pas Terminées 🤷‍♂️</option>
      </select>
    </div>
    )
}

export default GradientsSelect