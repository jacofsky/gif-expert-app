import React from 'react'
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Test in AddCategory.test.js', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should change input value ', () => {
        const input = wrapper.find('#inputAgregarPalabra')
        const value = 'Hola mundo'

        input.simulate('change', {target: { value }})

        expect(wrapper.find('p').text().trim()).toBe(value)
    })
    
    test('should not post the information on submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}})

        expect(setCategories).not.toHaveBeenCalled()
    })

    test('should call setCategories and clean text case', () => {

        // 1. simular el inputChange
        const input = wrapper.find('#inputAgregarPalabra')
        const value = 'Hola mundo'

        input.simulate('change', {target: {value}})

        // 2. simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){}})

        // 3. setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled()
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function))

        // 4. el valor del input debe de estar ''
        expect(input.prop('value')).toBe('')
        
    })
    
    
    
})
