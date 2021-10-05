import { reactive } from 'vue';
const currentUser = {
    username: 'Pete',
    password: '123',
};
const allUserList = [];
const authState = reactive({
    currentUser: currentUser,
    userList: allUserList,
    isUserLoggedIn: false,
});
export function AccessAuthStore() {
    return authState;
}
