import React, {} from 'react'
import PropTypes from 'prop-types'

import GifGridItem from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <div>
            <h3>{category}</h3>
            {loading && 'Cargando...'}

            <ul className='cardList'>
                {images.map(image => <GifGridItem key={image.id} {... image}/> )}
            </ul>
            
        </div>
    )
}

GifGrid.prototype = {
    category: PropTypes.string.isRequired
}

export default GifGrid
