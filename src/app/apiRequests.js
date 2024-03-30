import localforage from 'localforage';
import baseFetch from './baseFetch';

//Функция регистрации
export async function registration(data) {
  return baseFetch({
    url: process.env.REACT_APP_REGISTRATION_URL,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(data),
  });
}

// Функция аутентификации
export async function auth(data) {
  return baseFetch({
    url: process.env.REACT_APP_AUTH_URL,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(data),
  });
}

// Функция проверки на флаг администратора
export async function isAdmin() {
  return baseFetch({
    url: process.env.REACT_APP_ISADMIN_URL,
    method: 'GET',
    headers: { 'Authorization': await localforage.getItem('sessionToken'), },
  });
}