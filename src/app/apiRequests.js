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

// Функция запроса данных аккаутна
export async function getPerson() {
  return baseFetch({
    url: process.env.REACT_APP_GET_AUTH_URL,
    method: 'GET',
    headers: { 'Authorization': await localforage.getItem('sessionToken'), },
  });
}

// Функция внесения изменений в свои личные данные
export async function changePersonData(data) {
  return baseFetch({
    url: process.env.REACT_APP_CHANGE_PERSON_URL,
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': await localforage.getItem('sessionToken'),
    },
    body: JSON.stringify(data),
  });
}