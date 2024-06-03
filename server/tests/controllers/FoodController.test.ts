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
import { User } from "../../src/model/domain/entities/user/users";
import { UserBank } from "../../src/model/domain/entities/user/usersBanks";
import { Food } from "../../src/model/domain/entities/gamification/Food";
import { FoodController } from "../../src/controllers/FoodController";

jest.mock("../../src/model/domain/entities/user/users");
jest.mock("../../src/model/domain/entities/user/usersBanks");
jest.mock("../../src/model/domain/entities/gamification/Food");
let next = jest.fn() as NextFunction;

beforeEach(() => {});

afterEach(() => {
  jest.resetAllMocks();
});

describe.skip("buy tests", () => {
  test("buy successful", async () => {
    const req = httpMock.createRequest({ body: { userId: "1", foodId: "1" } });
    const res = httpMock.createResponse();
    const mockUser = { id: 1 };
    const mockUserBank = { id: 1, money: 25 };
    const mockFood = { id: 1, cost: 20 };

    const foodController = new FoodController();

    jest.spyOn(User, "findOne").mockResolvedValue(mockUser as User);

    await foodController.buy(
      req as Request,
      res as Response,
      next as NextFunction
    );

    const result = res._getJSONData();

    expect(mockUserBank.money).toEqual(5);
  });
});
