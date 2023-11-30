import { UserBank } from "../../../domain/entities/user/usersBanks";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";

class UserBankService implements CRUDServiceInterface<UserBank> {
  async itemExists(id: number) {
    const result = await UserBank.findOne({ where: { id } });

    return result ? true : false;
  }

  async update(item: UserBank) {
    await UserBank.update(item, { where: { id: item.id } });

    const result = await UserBank.findByPk(item.id);

    return result;
  }

  async getAll() {
    const result = await UserBank.findAll();

    return result;
  }

  async getItemById(id: number) {
    const result = await UserBank.findOne({ where: { id } });

    return result;
  }

  async create(userBank: UserBank) {
    const result = await UserBank.create(userBank);

    return result;
  }

  async deleteItem(id: number) {
    await UserBank.destroy({ where: { id } });

    return true;
  }
}
export const userBankService = new UserBankService();
