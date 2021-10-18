import axios from 'axios';
const instance = axios.create({
    timeout: 10000,
});
const responseBody = (response) => response.data;
const requests = {
    get: (url) => instance.get(url).then(responseBody),
    post: (url, data) => instance.post(url, data).then(responseBody),
    delete: (url) => instance.delete(url).then(responseBody)
};
export const users = {
    getUsers: () => requests.get('./users'),
};
export const wines = {
    getWines: () => requests.get('./wines/allWines'),
    postWine: (wine) => requests.post('./wines/postWine', wine),
    deleteWine: (wine_id) => requests.delete(`/wines/deleteWine/${wine_id}`)
};
export const encounters = {
    getEncountersByWine: (wine_id) => requests.get(`./encounters/${wine_id}`),
    postEncounter: (newEncounter) => requests.post(`./encounters/postEncounter`, newEncounter),
};
