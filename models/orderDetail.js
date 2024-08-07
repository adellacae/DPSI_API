const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Product = require('./product');
const Order = require('./order');
const OrderDetail = sequelize.define('OrderDetail', {
 orderDetailID: {
 type: DataTypes.INTEGER,
 primaryKey: true,
 autoIncrement: true
},
orderID: {
type: DataTypes.INTEGER,
allowNull: false,
references:{
    model: Order,
    Key:'orderID'
}
},
productID: {
type: DataTypes.INTEGER,
allowNull: false,
references: {
    model: Product,
    Key: 'productID'
}
},
quantity: {
type: DataTypes.INTEGER,
allowNull: false
}
});

OrderDetail.belongsTo(Product, {foreignKey:'productID'});
Product.hasMany(OrderDetail,{foreignKey:'productID'});

OrderDetail.belongsTo(Order,{foreignKey:'orderID'});
Order.hasMany(OrderDetail,{foreignKey:'orderID'});
module.exports = OrderDetail;