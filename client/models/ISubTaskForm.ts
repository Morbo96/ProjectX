export interface ISubtaskForm {
  name: string | undefined
  description: string | undefined
  taskId: number
  dateStart: Date | null | undefined
  dateEnd: Date | null | undefined
}
