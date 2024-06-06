export interface IUserPet {
  id: number
  name: string
  hunger: number
  lastFed: Date | undefined
  userId: number
  createdAt: Date | undefined
  updatedAt: Date | undefined
}
