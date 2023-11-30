import { Folder } from "../../../domain/entities/tasks/folders";
import { Goal } from "../../../domain/entities/tasks/goals";
import { User } from "../../../domain/entities/user/users";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";
import { FolderServiceInterface } from "../../interfaces/FolderServiceInterface";

class FolderService
  implements CRUDServiceInterface<Folder>, FolderServiceInterface
{
  //FUTURE for child-parent association between Folders
  async createChildAssociation(folderId: number, childId: number) {
    try {
      const result = await Folder.findOne({ where: { id: folderId } });

      const childFolder = await Folder.findOne({ where: { id: childId } });

      result.$add("child", childFolder);

      const parentFolder = await Folder.findOne({
        where: { id: folderId },
        include: [{ model: Folder, as: "children", where: { id: childId } }],
      });

      return parentFolder;
    } catch (error) {
      return null;
    }
  }
  async getParentFolders(folderId: number) {
    try {
      const result = await Folder.findAll({
        where: { id: folderId },
        include: Folder,
      });

      return result;
    } catch (error) {
      return null;
    }
  }
  async getChildFolders(folderId: number) {
    try {
      const result = await Folder.findAll({ where: { id: folderId } });

      return result;
    } catch (error) {
      return null;
    }
  }
  // future end block

  async getGoals(folderId: number) {
    const result = await Goal.findAll({ where: { folderId: folderId } });
    return result;
  }

  async itemExists(id: number) {
    const result = await Folder.findOne({ where: { id } });
    return result ? true : false;
  }

  async update(item: Folder) {
    await Folder.update(item, { where: { id: item.id } });

    const result = await Folder.findByPk(item.id);

    return result;
  }

  async getAll() {
    const result = await Folder.findAll();

    return result;
  }

  async getItemById(id: number) {
    const result = await Folder.findOne({ where: { id } });

    return result;
  }

  async create(folder: Folder) {
    const result = await Folder.create(folder);

    return result;
  }

  async deleteItem(id: number) {
    await Folder.destroy({ where: { id } });

    return true;
  }
}
export const folderService = new FolderService();
