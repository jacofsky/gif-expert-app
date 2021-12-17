import React from 'react'

const GifGridItem = ({id, img, title, username}) => {
    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>By: {username}</p>
        </div>
    )
}

export default GifGridItem
