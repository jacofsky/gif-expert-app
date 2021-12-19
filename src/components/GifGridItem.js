import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ({id, img, title, username}) => {
    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>By: {username ? username : 'Sin nombre'}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}

export default GifGridItem
