import { Food } from "../model/domain/entities/gamification/Food";

export async function insertFoodInDB() {
  try {
    await Food.findOrCreate({
      where: { name: "sandwich" },
      defaults: { nourishmentValue: 10, cost: 2 },
    });
    await Food.findOrCreate({
      where: { name: "donut" },
      defaults: { nourishmentValue: 5, cost: 1 },
    });
    await Food.findOrCreate({
      where: { name: "cake" },
      defaults: { nourishmentValue: 30, cost: 6 },
    });
    await Food.findOrCreate({
      where: { name: "sweet madame" },
      defaults: { nourishmentValue: 100, cost: 20 },
    });
    await Food.findOrCreate({
      where: { name: "omelette rice" },
      defaults: { nourishmentValue: 50, cost: 10 },
    });
  } catch (error) {
    console.error(error);
  }
}
