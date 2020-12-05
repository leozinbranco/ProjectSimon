import axios from 'axios'


export default async function getRandomImage() {
    const urls = [
        'https://dog.ceo/api/breeds/image/random',
        'http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true',
        'http://shibe.online/api/cats?count=1&urls=true&httpsUrls=true',
        'http://shibe.online/api/birds?count=1&urls=true&httpsUrls=true',
    ]

    return await axios.get(urls[Math.floor(Math.random()*urls.length)])
        .then(async (result) => {
            return result.data[0] || result.data.message
        }).catch((err) => {
            console.log(err)
            return null 
        }) 
}