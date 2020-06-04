import sequelize from "./config";

export {default as InstantData} from './model/InstantData'

sequelize.sync()