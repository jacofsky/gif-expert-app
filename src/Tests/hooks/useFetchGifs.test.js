import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Tests in useFetchGifs.test.js', () => {
    test('should return the initial state', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'))
        const {data, loading} = result.current
        
        await waitForNextUpdate()

        expect(loading).toBe(true)
        expect(data.length).toBe(0)
    })

    test('should return an img array and loading in false', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'))

        await waitForNextUpdate()

        const {data, loading} = result.current

        expect(data.length).toBe(10)
        expect(loading).toBe(false)
    })
    
    
})
