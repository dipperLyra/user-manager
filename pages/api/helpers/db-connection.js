const { Sequelize, DataTypes } = require('sequelize');

const dbUser = process.env.DB_USER;
const dbName = process.env.DB_NAME;
const pword = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const dialect = process.env.DB_DIALECT;


var sequelise = new Sequelize(
    dbName,
    dbUser,
    pword,
    {
        host: host,
        dialect: dialect, 
    }
);

module.exports = { sequelise, DataTypes }