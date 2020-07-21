const express = require('express');
const ejs = require('ejs');
const stockfinder = require('stockfinder');

const server = express();
server.use(express.static('public'));
server.set('view-engine', ejs);

const PORT = 1337;

server.get('/', (req, res) => {
    res.render('home.ejs')
});

const getPrice = (code) => {
    return new stockfinder('stable', code, 'pk_16a849fd637243a79fff90fa4d42bc5d', false);
}

server.get('/price', (req, res) => {
    const sf = getPrice(req.query.stockcode);
    sf.getStock().then(result => {
        res.render('price.ejs', { price: result });
        console.log(result);
    });
    
    
});

server.listen(PORT, () => {
    console.log(`Now serving on http://localhost/${PORT}`);
});