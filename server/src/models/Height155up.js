module.exports = (sequelize, DataTypes) => {
    const Height155up = sequelize.define('Height155up', {
        name_thai: DataTypes.STRING,
        name_eng: DataTypes.STRING,
        detail: DataTypes.STRING,
        availability: DataTypes.STRING,
        capacity: DataTypes.INTEGER
    })
    return Height155up
}