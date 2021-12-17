export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=o1xgKOv3GcOvJLDRIMBoSG1kWAC8FMvI`
    const resp= await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map(gif => {
        return {
            id: gif.id,
            img: gif.images?.original.url,
            title: gif.title,
            username: gif.username
        }
    })

    return gifs;
}