import axios from 'axios';

const client = axios.create({
  baseURL: 'https://9bef-112-221-41-90.ngrok-free.app/api/',
});

export function applyToken(jwt: string) {
  client.defaults.headers.Authorization = `Bearer ${jwt}`;
}

export function clearToken() {
  delete client.defaults.headers.Authorization;
}

export default client;
