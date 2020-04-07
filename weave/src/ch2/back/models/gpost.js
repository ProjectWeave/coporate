// 그룹만들기 테이블
module.exports = (sequelize, DataTypes) => {
    const Gpost = sequelize.define('Gpost', { // 테이블명은 gposts
      title: {
        type: DataTypes.STRING(20), // 20글자 이하
        allowNull: false, // allowNull : 필수
      },
      descp: {
        type: DataTypes.TEXT, // 매우 긴 글
        allowNull: false,
      },
    }, {
      charset: 'utf8mb4', //  한글+이모티콘
      collate: 'utf8mb4_general_ci',
      tableName:'gposts',
    });
    Gpost.associate = (db) => {
        db.Gpost.belongsTo(db.User); 
        db.Gpost.hasOne(db.Image); 
        db.Gpost.hasMany(db.Post);
        // db.Gpost.belongsTo(db.Post, { as: 'gpost' });
        // db.Gpost.belongsToMany(db.Post, { through: 'Gpost' });
    };
    return Gpost;
  };

  // BelongsTo 가있는 테이블에 다른테이블의 id를 저장,
  // BelongsToMany : 다되다 관계, 이때 사이에 테이블 자동생성->through로 설정
