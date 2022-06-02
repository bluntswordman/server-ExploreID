module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
    },
    Image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lat: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    lng: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  });

  // Location.associate = models => {
  //   Location.hasMany(models.Event, {
  //     foreignKey: 'locationId',
  //     as: 'events'
  //   });
  // };

  return Location;
}