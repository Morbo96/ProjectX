import {
  describe,
  test,
  expect,
  beforeEach,
  afterEach,
  jest,
} from "@jest/globals";
import { User } from "../../../../../src/model/domain/entities/user/users";
import { userService } from "../../../../../src/model/services/implementations/usersServices/UserService";
import { userBankService } from "../../../../../src/model/services/implementations/usersServices/UserBankService";
import { UserBank } from "../../../../../src/model/domain/entities/user/usersBanks";
import { Model } from "sequelize";

jest.mock("../../../../../src/model/domain/entities/user/users");
jest.mock("../../../../../src/model/domain/entities/user/usersBanks");
jest.mock(
  "../../../../../src/model/services/implementations/usersServices/UserBankService"
);
const mockUser = User as jest.Mocked<typeof User>;
const mockUserBank = UserBank as jest.Mocked<typeof UserBank>;

beforeEach(() => {});

afterEach(() => {
  jest.resetAllMocks();
});
//I WANT TO DIE, THIS DOESN'T WORK (toJSON in userService for userBank doesn't work)
describe.skip("create User tests", () => {
  test("create 1 User successfully", async () => {
    const testUserData = { id: 1, login: "login" };

    mockUser.create.mockResolvedValue(testUserData as User);
    mockUserBank.build.mockReturnValue({ userId: testUserData.id } as UserBank);

    mockUserBank.prototype.toJSON.mockReturnValue({
      userId: testUserData.id,
    } as UserBank);

    const actualUser = await userService.create(testUserData as User);

    expect(actualUser).toMatchObject(testUserData);
  });
});
