import '@testing-library/jest-dom';
import react from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem'

describe('Test in GifGridItem.test.js', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg'
    const username = 'NN'
    const wrapper = shallow(<GifGridItem title={title} img={url} username={username}/>)

    test('should show correctly the component', () => {

        expect(wrapper).toMatchSnapshot()
    })

    test('should title be in a h3 and alt', () => {

        const h3 = wrapper.find('h3')
        expect(h3.text().trim()).toBe(title)
        
    })

    test('should img equal url and alt props', () => {

        const img = wrapper.find('img')
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)

        
    })

    test('should have animated class', () => {

        const div = wrapper.find('div')
        const className = div.prop('className')

        expect(className.includes('animate__fadeIn')).toBe(true)

    })  
    
})
