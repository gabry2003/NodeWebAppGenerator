const infoGenerator = require('./infoGenerator');

module.exports = (url, nomePagina) => {
    const func = (req, res) => {
        const info = infoGenerator(req, nomePagina, url);
        res.render(url, info);
    }
    return func;
};