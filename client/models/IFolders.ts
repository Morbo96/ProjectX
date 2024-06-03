import { IGoal } from '../../client/models/IGoals'

export interface IFolder {
  id: number
  name: string
  isSystem: boolean | undefined
  userId: number | undefined
  createdAt: Date | undefined
  updatedAt: Date | undefined
  goals: IGoal[] | undefined
}
