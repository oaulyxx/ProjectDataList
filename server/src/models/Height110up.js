module.exports = (sequelize, DataTypes) => {
    const Height110up = sequelize.define('Height110up', {
        name_thai: DataTypes.STRING,
        name_eng: DataTypes.STRING,
        detail: DataTypes.STRING,
        availability: DataTypes.STRING,
        capacity: DataTypes.INTEGER
    })
    return Height110up
}