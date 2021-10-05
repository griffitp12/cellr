import { reactive } from 'vue';
import { UserData, AuthStoreContents } from '../../../typescript/authTypes';

const currentUser: UserData = {
  username: 'Pete',
  password: '123',
};

const allUserList: UserData[] = [];

const authState: AuthStoreContents = reactive({
  currentUser: currentUser,
  userList: allUserList,
  isUserLoggedIn: true,
});

export function AccessAuthStore(): AuthStoreContents {
  return authState;
}
