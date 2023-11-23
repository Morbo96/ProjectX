import { IGoal } from '../../client/models/IGoals'

export interface IFolder {
  id: number
  name: string
  isSystem: boolean
  userId: number
  createdAt: Date
  updatedAt: Date
  goals: IGoal[]
}
