import { Ref } from 'vue'


export interface AuthStoreContents {
    currentUser: Ref<UserData>
    userList: UserData[]
    isUserLoggedIn: Ref<boolean>
}

export interface UserData {
    username: string,
    password: string,
}

export interface CurrentUser extends UserData {
    isLoggedIn?: boolean
}