import Sequelize from "sequelize";

const config = {
    dbname: 'client',
    username: 'root',
    password: 'root',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    }
};

const sequelize  = new Sequelize(config.dbname,config.username,config.password,{
    host: config.host,
    dialect: config.dialect,
    pool: config.pool
})

/**
 * 验证连接是否建立成功
 */
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

export default sequelize