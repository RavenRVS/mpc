// Валидация почты
export function emailValidation(email) {
  const re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  return re.test(email);
}

// Валидация пароля
export function passwordValidation(password) {
  const re = /^(?=.*?[A-Z])(?=(.*[a-z]){0,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{6,}$/;
  return re.test(password);
}