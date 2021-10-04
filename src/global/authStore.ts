import { reactive } from 'vue';
import { UserData, AuthStoreContents } from '../typescript/authTypes';

const currentUser: UserData = {
  username: 'Pete',
  password: '123',
};

const userList: UserData[] = [
  { username: 'Pete', password: '123' },
  { username: 'Meg', password: '123' },
];

const authState: AuthStoreContents = reactive({
  currentUser: currentUser,
  userList: userList,
  isUserLoggedIn: true
});

export function AccessAuthStore(): AuthStoreContents {
  return authState;
}
