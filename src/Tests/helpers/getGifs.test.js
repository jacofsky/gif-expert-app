import { getGifs } from "../../helpers/getGifs"

describe('Test in getGifs Fetcj', () => {
    
    test('should get 10 elements', async() => {
        const gifs = await getGifs('Pokemon')

        expect(gifs.length).toBe(10)

    })

    test('should get 0 elements', async() => {
        const gifs = await getGifs('')

        expect(gifs.length).toBe(0)

    })
    
})
