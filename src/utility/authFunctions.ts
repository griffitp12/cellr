import { UserData } from '../typescript/authTypes';

export const simpleLoginCheck = (
    username: string,
    password: string,
    userList: UserData[]
  ): boolean | UserData => {
    for (const user of userList) {
      if (username.toLowerCase() === user.username.toLowerCase() && password === user.password) {
        return user;
      }
    }
    return false;
  }

  export const setCurrentUser = (
      username: string,
      userList: UserData[]
  ): UserData => {
      for (const user of userList) {
          if (username.toLowerCase() === user.username.toLowerCase()) {
              return user
          }
      }
  }
