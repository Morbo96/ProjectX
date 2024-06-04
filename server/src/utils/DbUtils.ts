import sequelize from "../model/domain/dbConnection";

export async function dbDrop() {
  await sequelize.drop({});
  console.log("All tables have been dropped");
  await sequelize.authenticate().then(() => {
    console.log("Connection after wiping has been established successfully.");
  });
  await sequelize.sync();
}
