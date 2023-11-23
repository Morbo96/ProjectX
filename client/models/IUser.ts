export interface IUserLoginForm {
  login: string
  passwordEncrypted: string
}

export interface IUserSucsess {
  accessToken: string
  refreshToken: string
}

export interface IUserRegisterForm {
  email: string
  login: string
  passwordEncrypted: string
  passwordConfirm: string
}

export interface IUserRegister {
  email: string
  login: string
  passwordEncrypted: string
}
