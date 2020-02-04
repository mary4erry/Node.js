const express = require('express');
const path = require('path');
const consolidate = require('consolidate');
const cheerio = require('cheerio');
const request = require('request');
const handlebars = require('handlebars');
const fs = require('fs');


const server = express();
// middleware
server.use(express.json());
server.use(express.urlencoded({extended: true}));
//настройка handlebars
server.engine('hbs', consolidate.handlebars);
server.set('view engine', 'hbs');
server.set('views', path.resolve(__dirname, 'views', 'hbs'));

const categories = [];

function getNews () {
    let url = 'https://lenta.ru/${cat}'
} 


server.get('/', (req, res) =>{
    categories.slice(1, -1);
    // console.log(req);
    request('https://lenta.ru/', (err, response, body) => {
        if (!err) {
            let $ = cheerio.load(body);
            let cat = $('.b-sidebar-menu__list-item')
            
            cat.each((i, item) => {
                let name = $(item). children('a').text(); 
                let href = $(item). children('a').attr('href'); 
                categories.push({name: name, href: href});
                // console.log($(item).children('a').attr('href')); 
            });
            request(`https://lenta.ru${categories[5].href}`, (err,response, body) => {
                let $ = cheerio.load(body);
                let news = $('.js-content .titles span');
                news.each((i, item) => {
                    console.log($(item).text());
                });
            });
            // res.send(categories);
            res.render('index', {
                categories: categories
            });
        } else console.log('error');
    });
});

server.post('/getNews', (req, res) => {
    res.send(req.body.category);
});

server.listen(8000, () => {
    console.log('http://localhost:8000/');
    
})