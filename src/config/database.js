require('dotenv/config');

module.exports = {
    dialect: 'mssql',
    host: process.env.SQL_HOST,
    username: process.env.SQL_USER,
    password: process.env.SQL_PASS,
    database: process.env.SQL_NAME,
    operatorsAliase: false,
    dialectOptions: {
        options: {
            useUTC: false,
            dateFirst: 1,
            requestTimeout: 300000,
        },
    },
};
