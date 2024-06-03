import { Food } from "../../../domain/entities/gamification/Food";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";

class FoodService implements CRUDServiceInterface<Food> {
  async itemExists(id: number) {
    const result = await Food.findOne({ where: { id } });

    return result ? true : false;
  }

  async update(item: Food) {
    await Food.update(item, { where: { id: item.id } });

    const result = await Food.findByPk(item.id);

    return result;
  }

  async getAll() {
    const result = await Food.findAll();

    return result;
  }

  async getItemById(id: number) {
    const result = await Food.findOne({ where: { id } });

    return result;
  }

  async create(food: Food) {
    const result = await Food.create(food);

    return result;
  }

  async deleteItem(id: number) {
    await Food.destroy({ where: { id } });

    return true;
  }
}
export const foodService = new FoodService();
