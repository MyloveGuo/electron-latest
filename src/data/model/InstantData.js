import {Model, DataTypes} from "sequelize";
import sequelize from "../config"

/**
 *  数据模型  ---- 实时数据
 */
class InstantData extends Model{}
InstantData.init({
    id: {
        type: DataTypes.BIGINT(11), // ID
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    time: {
        type: DataTypes.DATE // 创建时间
    },
    s1:{
        type: DataTypes.STRING(100)   // 测试数据
    },
    s2:{
        type: DataTypes.STRING(100)   // 测试数据
    },
}, {sequelize,
    tableName:'instant_data',   // 表名
    modelName:'InstantData',    // 模型名
    timestamps: false   // 不要默认时间戳
})

export default InstantData