import React from 'react';

const GradientTag = (props) => {
    const { tags } = props
    return (
        <div class="d-flex flex-row mb-3">
            {tags.map( (el) => (
                <button 
                    className="d-flex btn btn-sm btn-dark mt-2 mb-1 mr-1" 
                    type="button" 
                    disabled={true} >
                    {el}
                </button>
            ))}
        </div>
    )
}

export default GradientTag