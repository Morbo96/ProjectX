import { ITask } from './ITasks'

export interface IGoal {
  id: number
  name: string
  dateStart: null
  dateEnd: null
  folderId: number
  createdAt: Date
  updatedAt: Date
  tasks: ITask[]
}
