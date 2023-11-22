const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('testcon', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

let connectDB = async() => {
    try{
        await sequelize.authenticate();
        console.log('connnect DB sucsessfull')
    } catch(error){
        console.error('connect DB fail', error)
    }
}

module.exports = connectDB