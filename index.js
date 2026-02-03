import * as cheerio from 'cheerio'
import axios from 'axios';
import express from 'express'

const app = express()
const port = 3000

app.listen(port, () => {
    console.log('Server is running on port ', port)
})

const url = 'https://books.toscrape.com/catalogue/category/books/mystery_3/index.html'

const books = []

async function fetchBookData () {
    try {
        const response = await axios.get(url)
        const $ = cheerio.load(response.data)

        const bookElements = $('article')

        bookElements.each(function() {
          const title = $(this).find('h3 a ').text()
            const price = $(this).find('.price_color').text()
            const stock = $(this).find('.availability').text().trim()

            books.push({title, price, stock})
        })
        console.log(books)
    }
     catch (error) {
        console.error('Error fetching data:', error)
    }
}

fetchBookData()