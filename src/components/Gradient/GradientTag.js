import React from 'react';

const GradientTag = ({tags}) => {
    console.log('tags', tags)
    return (
        <div class="d-flex flex-row mb-3">
            {tags.map( (el) => (
                <button className="d-flex btn btn-sm btn-dark m-1" type="button">{el}</button>
            ))}
        </div>
    )
}

export default GradientTag