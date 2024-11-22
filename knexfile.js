module.exports = {
    development: {
        client:  'sqlite3',
        connection: {
            filename: './data/protocolos.db',
        },
        userNullAsDefault: true,
    }
}