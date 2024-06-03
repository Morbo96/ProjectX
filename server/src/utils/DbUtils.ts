import sequelize from "../model/domain/dbConnection";

export async function dbDrop() {
  await sequelize.drop({});
  console.log("All tables have been dropped");
}
