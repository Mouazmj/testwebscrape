import * as cheerio from 'cheerio'
import axios from 'axios';
import express from 'express'

const app = express()
const port = 3000

app.listen(port, () => {
    console.log('Server is running on port ', port)
})

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