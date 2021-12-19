import React,{useState} from 'react'

import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = ({defaultCategories = ['One Punch']}) => {

    

    const [categories, setCategories] = useState(defaultCategories)


    return (
        <>
            <h1 className='title'>GifExpertApp</h1>
        
            <AddCategory setCategories={setCategories}/>

            <hr />

            
            
            
            <ul>
                {categories.map(category => <GifGrid key={category} category={category}/>)}
            </ul>
        </>
    )
}

export default GifExpertApp
