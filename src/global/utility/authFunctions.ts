import { UserData } from '../../../typescript/authTypes'
import axios from 'axios'

export const getAllUsers = async () => {
  const users = await axios.get('/users')
  return (users)
}

export const simpleLoginCheck = (username: string, password: string, userList: UserData[]): false | UserData => {
  for (const user of userList) {
    if (username.toLowerCase() === user.username.toLowerCase() && password === user.password) {
      return user
    }
  }
  return false
}
