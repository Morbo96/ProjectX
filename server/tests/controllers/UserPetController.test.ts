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
import { UserPet } from "../../src/model/domain/entities/user/usersPets";
import { Food } from "../../src/model/domain/entities/gamification/Food";
import { UserPetController } from "../../src/controllers/UserPetController";

jest.mock("../../src/model/domain/entities/user/usersPets");
jest.mock("../../src/model/domain/entities/gamification/Food");
let next = jest.fn() as NextFunction;

beforeEach(() => {});

afterEach(() => {
  jest.resetAllMocks();
});

describe("calculateCurrentHunger tests", () => {
  test("hours to half of hunger passed => half hunger added", async () => {
    const req = httpMock.createRequest({ params: { id: "1" } });
    const res = httpMock.createResponse();
    const currentTime = new Date("2024-05-26");
    const hours = 18; //full hunger is 36 HOURS

    const lastFed = new Date(currentTime);
    lastFed.setHours(currentTime.getHours() - hours);
    const mockUserPet = {
      id: 1,
      lastFed: lastFed,
      hunger: 50,
    };

    const userPetController = new UserPetController();

    jest.spyOn(UserPet, "findOne").mockResolvedValue(mockUserPet as UserPet);

    await userPetController.calculateCurrentHunger(
      req as Request,
      res as Response,
      next as NextFunction
    );

    const result = res._getJSONData();

    expect(result.hunger).toEqual(100);
  });
});
describe("feed tests", () => {
  test("food to half of hunger passed => half hunger reduced", async () => {
    const req = httpMock.createRequest({
      params: { id: "1" },
      body: { foodId: "1" },
    });
    const res = httpMock.createResponse();
    const currentTime = new Date("2021-02-26T22:42:16.652Z");
    const hours = 18; //full hunger is 36 HOURS

    const lastFed = new Date(currentTime);
    lastFed.setHours(currentTime.getHours() - hours);
    const mockUserPet = {
      id: 1,
      lastFed: lastFed,
      hunger: 100,
    };
    const mockFood = {
      id: 1,
      nourishmentValue: 50,
    };

    const userPetController = new UserPetController();

    jest.spyOn(UserPet, "findOne").mockResolvedValue(mockUserPet as UserPet);
    jest.spyOn(Food, "findOne").mockResolvedValue(mockFood as Food);

    await userPetController.feed(
      req as Request,
      res as Response,
      next as NextFunction
    );

    const result = res._getJSONData();

    //expect(result.lastFed).toEqual(new Date());
    expect(result.hunger).toEqual(50);
  });
});
