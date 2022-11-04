export default function (sequelize, Sequelize) {
    const Users = sequelize.define("users", {
      username: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });

    const Catalogues = sequelize.define("catalogues", {
        name: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING,
        },
        price: {
            type: Sequelize.INTEGER,
        },
        tag: {
            type: Sequelize.STRING,
        },
    });
    return {
        User :Users,
        Catalogues: Catalogues,
    }
  };