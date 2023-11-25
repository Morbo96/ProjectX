import { Request, Response } from "express";
import { goalService } from "../model/services/implementations/tasksServices/GoalService";
import { subtaskService } from "../model/services/implementations/tasksServices/SubtaskService";
import { SubtaskInfo } from "../model/domain/entities/tasks/subtaskInfos";
import { Subtask } from "../model/domain/entities/tasks/subtasks";
import { subtaskInfoService } from "../model/services/implementations/tasksServices/SubtaskInfoService";

export class SubtaskController {}
