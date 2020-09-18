module.exports = (req, res, args) => {
    // get the status code if response written
    const status = (typeof res.headersSent !== 'boolean' ? Boolean(res.header) : res.headersSent) ?
        res.statusCode :
        undefined

    // get status color
    const color = status >= 500 ? 31 // red
        :
        status >= 400 ? 33 // yellow
        :
        status >= 300 ? 36 // cyan
        :
        status >= 200 ? 32 // green
        :
        0; // no color

    return '\x1b[' + color + 'm' + status + '\x1b[0m';
};