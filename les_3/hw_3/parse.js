//https://hi-tech.mail.ru/
const request = require('request');
const cheerio = require('cheerio');
const chalk = require('chalk')

request('https://hi-tech.mail.ru/news/', (err, response, body) => {
    if (!err && response.statusCode === 200) {
        const $ = cheerio.load(body);

        const news = $('.newsitem__title-inner');
        let newsList = ''
        for (i = 0; i < (news.length > 10 ? 10 : news.length); i++) {
            let newsItem = news.eq(i).text()
            newsList += ` * ${newsItem}\n`
        }
        console.log(`\n${chalk.cyan('Новости в мире технологий:')}\n\n${newsList}`)        
    }
})