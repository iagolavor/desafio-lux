import axios from 'axios';

const github = axios.create({
    baseURL: 'https://api.github.com/users/',
    timeout: 1000
})

export function getUser(username){
    return github.get(`${username}`);
}