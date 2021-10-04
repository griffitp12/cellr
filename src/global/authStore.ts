import { reactive } from 'vue';
import { UserData, AuthStoreContents } from '../typescript/authTypes';

const currentUser: UserData = {
  username: '',
  password: '',
};

const userList: UserData[] = [
  { username: 'Pete', password: '123' },
  { username: 'Meg', password: '123' },
];

const authState: AuthStoreContents = reactive({
  currentUser: currentUser,
  userList: userList,
  isUserLoggedIn: false
});

export function AccessAuthStore(): AuthStoreContents {
  return authState;
}
