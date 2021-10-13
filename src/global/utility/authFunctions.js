export const simpleLoginCheck = (username, password, userList) => {
    for (const user of userList) {
        if (username.toLowerCase() === user.username.toLowerCase() && password === user.password) {
            return user;
        }
    }
    return false;
};
