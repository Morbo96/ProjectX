export interface ISubTaskInfo {
  id: number | undefined
  dateStart: Date | null | undefined
  dateEnd: Date | null | undefined
  orderNumber: number | undefined
  completed: boolean
  subtaskId: number | undefined
  difficulty: Difficulty
  createdAt: Date | undefined
  updatedAt: Date | undefined
}

interface Difficulty {
  difficulty: string
}
