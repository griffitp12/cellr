import { Ref, ref } from 'vue'
import { CurrentUser, UserData, AuthStoreContents } from '../typescript/authTypes'

const currentUser: Ref<UserData> = ref({
    username: "",
    password: ""
})

const isUserLoggedIn= ref(false)

const userList: UserData[] = [
    {username: "Pete", password: "123"}, 
    {username: "Meg", password: "123"}
]

export function AccessAuth(): AuthStoreContents {
    return {
        currentUser,
        userList,
        isUserLoggedIn
    }
} 