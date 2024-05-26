import { UserPet } from "../../../domain/entities/user/usersPets";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";

class UserPetService implements CRUDServiceInterface<UserPet> {
  async itemExists(id: number) {
    try {
      const result = await UserPet.findOne({ where: { id } });

      return result ? true : false;
    } catch (error) {
      return false;
    }
  }

  async update(item: UserPet) {
    try {
      await UserPet.update(item, { where: { id: item.id } });

      const result = await UserPet.findByPk(item.id);

      return result;
    } catch (error) {
      console.log(error);

      return null;
    }
  }

  async getAll() {
    try {
      const result = await UserPet.findAll();

      return result;
    } catch (error) {
      return null;
    }
  }

  async getItemById(id: number) {
    try {
      const result = await UserPet.findOne({ where: { id } });

      return result;
    } catch (error) {
      return null;
    }
  }

  async create(userPet: UserPet) {
    try {
      userPet.lastFed = new Date();

      const result = await UserPet.create(userPet);

      return result;
    } catch (error) {
      return null;
    }
  }

  async deleteItem(id: number) {
    try {
      await UserPet.destroy({ where: { id } });

      return true;
    } catch (error) {
      return false;
    }
  }
}
export const userPetService = new UserPetService();
