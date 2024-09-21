module.exports = (sequelize, Sequelize) => {
    const Automovil = sequelize.define('automovil', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      marca: {
        type: Sequelize.STRING
      },
      modelo: {
        type: Sequelize.STRING
      },
      año: {
        type: Sequelize.INTEGER
      },
      color: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.FLOAT
      },
      copyrightby: {
        type: Sequelize.STRING,
        defaultValue: 'UMG Antigua'
      }
    });
  
    return Automovil;
  }  