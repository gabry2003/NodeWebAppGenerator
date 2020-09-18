const config = require('../config/config');

module.exports = (req, nomePagina, view) => {

    const obj = {
        pagina: {
            nome: nomePagina,
            url: req.url,
            view: view
        },
        app: {
            nome: config.app.nome,
            autore: config.app.autore,
            versione: config.app.versione
        }
    };

    return obj;

};