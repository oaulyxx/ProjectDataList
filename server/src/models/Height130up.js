module.exports = (sequelize, DataTypes) => {
    const Height130up = sequelize.define('Height130up', {
        name_thai: DataTypes.STRING,
        name_eng: DataTypes.STRING,
        detail: DataTypes.STRING,
        availability: DataTypes.STRING,
        capacity: DataTypes.INTEGER
    })
    return Height130up
}