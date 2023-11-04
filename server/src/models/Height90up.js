module.exports = (sequelize, DataTypes) => {
    const Height90up = sequelize.define('Height90up', {
        name_thai: DataTypes.STRING,
        name_eng: DataTypes.STRING,
        detail: DataTypes.STRING,
        availability: DataTypes.STRING,
        capacity: DataTypes.INTEGER
    }) 
    return Height90up
}