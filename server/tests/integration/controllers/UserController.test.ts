import {
  describe,
  test,
  expect,
  beforeEach,
  afterEach,
  jest,
} from "@jest/globals";
import { NextFunction, Request, Response, response } from "express";
import httpMock from "node-mocks-http";
import { UserController } from "../../../src/controllers/UserController";
import { User } from "../../../src/model/domain/entities/user/users";
import { userService } from "../../../src/model/services/implementations/usersServices/UserService";

jest.mock("../../../src/model/domain/entities/user/users");
const mockedUser = User as jest.Mocked<typeof User>;
let next = jest.fn() as NextFunction;

beforeEach(() => {});

afterEach(() => {
  jest.resetAllMocks();
});

describe("getLogin tests", () => {
  test("getLogin return 1 User Successfully; actual UserService", async () => {
    const login = "login";
    const req = httpMock.createRequest({ body: { login: login } });
    const res = httpMock.createResponse();
    const mockUser = { login: login };
    const userController = new UserController();

    mockedUser.findOne.mockResolvedValue(mockUser as User);

    await userController.getByLogin(
      req as Request,
      res as Response,
      next as NextFunction
    );

    const result = res._getJSONData();

    expect(result).toMatchObject(mockUser);
  });
});
