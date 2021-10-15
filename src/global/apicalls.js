import axios from 'axios';
const instance = axios.create({
    timeout: 10000,
});
const responseBody = (response) => response.data;
const requests = {
    get: (url) => instance.get(url).then(responseBody),
    post: (url, data) => instance.post(url, data).then(responseBody),
};
export const users = {
    getUsers: () => requests.get('./users'),
};
export const wines = {
    getWines: () => requests.get('./wines/allWines'),
    postWine: (wine) => requests.post('./wines/postWine', wine)
};
export const encounters = {
    encountersByWine: (wineName) => requests.get(`./encounters/:${wineName}`),
};
