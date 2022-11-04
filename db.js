import Sequelize from 'sequelize';
import model from "./models.js";
const db = {};
const sequelize = new Sequelize("mydb", "root", "123456", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    logging: false,
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.models = model(sequelize, Sequelize);

db.sequelize.sync({ force: true }).then(async () => {

    // Default values to input into the database can be initialized here.
    // Use findOrCreate so restarting the server wont cause errors
    await db.models.User.findOrCreate({
        where: {
            username: "test"
        },
        defaults:{
            password: "test"
        }
    })
    
    await db.models.User.findOrCreate({
        where: {
            username: "test1"
        },
        defaults:{
            password: "test1"
        }
    })
    
    await db.models.User.findOrCreate({
        where: {
            username: "test2"
        },
        defaults:{
            password: "test2"
        }
    })

    await db.models.User.findOrCreate({
        where: {
            username: "admin"
        },
        defaults:{
            password: "adminer"
        }
    })
    console.log("Drop and re-sync db.");
});

export default db;