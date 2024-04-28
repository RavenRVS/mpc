// Показ сообщений ошибок/успеха
export function showMsg(data, timer, setMessage) {
  setMessage(data);
  setTimeout(() => setMessage(false), timer);
}

// Валидация пароля
export function passwordValidation(password) {
  const re = /^(?=.*?[A-Z])(?=(.*[a-z]){0,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{6,}$/;
  return re.test(password);
}
