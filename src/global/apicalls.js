import axios from 'axios';
const instance = axios.create({
    timeout: 10000
});
const responseBody = (response) => response.data;
const requests = {
    get: (url) => instance.get(url).then(responseBody)
};
export const users = {
    getUsers: () => requests.get('./users')
};
export const wines = {
    getWines: () => requests.get('./wines')
};
