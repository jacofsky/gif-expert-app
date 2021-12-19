import react from "react";
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Tests in GifGrid.test.js', () => {

    const category = 'One Punch'
    
    test('should match the snapshot', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category = {category}/>)
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should show items when img have been upload', () => {
        // deberemos hacer un mock para hacer de cuenta de que el custom hook ya recibio la informacion
        
        const gifs = [{
            id: 'ABC',
            img: 'https://localhost/cualquiercosa.jpg',
            title: 'AAA',
            username: 'AAAS'
        },{
            id: '123',
            img: 'https://localhost/cualquiercosa.jpg',
            title: 'AAA',
            username: 'AAAS'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category = {category}/>)
        
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    })
    
})
