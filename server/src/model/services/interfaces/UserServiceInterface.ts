import { DailyTask } from "../../domain/entities/dailyTasks/dailyTasks";
import { Folder } from "../../domain/entities/tasks/folders";
import { User } from "../../domain/entities/user/users";
import { UserPet } from "../../domain/entities/user/usersPets";

export interface UserServiceInterface {
  getByLogin: (login: string) => Promise<User | null>;

  getByEmail: (email: string) => Promise<User | null>;

  getUsersPets: (userId: number) => Promise<UserPet[] | null>;

  getFolders: (userId: number) => Promise<Folder[] | null>;

  getDailyTasks: (userId: number) => Promise<DailyTask[] | null>;
}
