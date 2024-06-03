import { ITask } from './ITasks'

export interface IGoal {
  id: number
  name: string
  dateStart: Date | null | undefined
  dateEnd: Date | null | undefined
  folderId: number
  createdAt: Date | undefined
  updatedAt: Date | undefined
  tasks: ITask[] | undefined
}
