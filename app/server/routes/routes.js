const renderGenerator = require('../../utils/renderGenerator');

module.exports = {
    // Servizi con metodo post
    post: {},
    // Pagine
    get: {
        home: renderGenerator('home', 'Home')
    },
    // Errore 404
    notFound: renderGenerator('notFound', 'Errore 404')
}