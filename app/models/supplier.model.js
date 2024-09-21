// app/models/supplier.model.js
module.exports = (sequelize, Sequelize) => {
    const Supplier = sequelize.define("supplier", {
      name: {
        type: Sequelize.STRING
      },
      contact: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      }
    });
  
    return Supplier;
  };
  