import React,{useState} from 'react';
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)

    }
    
    const handlSumbit = (e) => {
        
        e.preventDefault()
        console.log('--- aaEJECUTADOaa ----')

        if(inputValue.trim() !== ''){
            setCategories(cats => [inputValue, ...cats])
            setInputValue('')
        }
    }

    return (
        <form onSubmit={handlSumbit}>
            <p>{inputValue}</p>
            <input 
                id='inputAgregarPalabra' 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} 
            />
            
        </form>
    )
}

AddCategory.propTypes= {
    setCategories: PropTypes.func.isRequired
}


export default AddCategory
