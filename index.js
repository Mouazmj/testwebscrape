import cheerio from cheerio;
import axios from axios;

const url = 'https://books.toscrape.com/catalogue/category/books/mystery_3/index.html'

async function fetchBookData () {
    try {
        const response = await axios.get(url)
        const $ = cheerio.load(response.data)
        const genre = $('h1').text()

        console.log('Genre: ', genre)
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

fetchBookData()