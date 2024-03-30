import { Form, Link, redirect, useActionData } from 'react-router-dom';
import { isAdmin, auth, getPerson } from '../../app/apiRequests';
import "./Auth.css"

export async function action({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    let errors = {};
  
    if (typeof data.email !== 'string' || data.email.trim() === '' || !data.email.includes('@')) {
      errors.email = true;
    } 
    
    if (typeof data.password !== 'string' || data.password.trim().length < 6) {
      errors.password = true;
    }

    if (Object.keys(errors).length === 0) {
        const response = await auth(data);
        //Проверка успешности аутентификации
        if (!response.error) {
          // Проверяем флаг админа(авторизация) и перенаправляем на соответствующие страницы(роуты)
          const check = await isAdmin()
          if (check.admin) {
            return redirect('/admin');
          }
          return redirect('/user');
        }
        // Аутентификация не пройдена
        errors.response = 'НЕВЕРНЫЙ ПАРОЛЬ ИЛИ ПОЧТА';
    }
  
    return errors;
  }

export const Auth = () => {
    const errors = useActionData();

    return (
        <>
            <div className="direction-container">
                <h1 className="direction__title">
                    My Personal Cloud
                </h1>
                <p>облачное хранилище для ваших файлов</p>
            </div>
            <div className="auth-modal__conatiner">
                <div className="auth-modal__title-conatiner">
                    <h2 className="auth-modal__title">Авторизация</h2>
                </div>
                <Form method="post" id="auth-form" className="auth-modal__form">
                    <input id="auth_email" type="text" name="email" className="auth-form__field email-field" placeholder="Введите email"/>
                    <div className="auth-form__error-message-container">
                        {errors?.email ? (
                            <p className="auth-form__error-message-field" >Неккоректная почта</p>
                        ):(null)}
                    </div>
                    <input 
                        id="login_password" 
                        type="password"
                        name="password"
                        className="auth-form__field pwd-field"
                        placeholder="Введите пароль"
                    />
                    <div className="auth-form__error-message-container">
                        {errors?.password ? (
                            <p className="auth-form__error-message-field">Неккоректный пароль</p>
                        ):(null)}
                    </div>
                    <button type="submit" className="auth-modal__submit-btn">Войти</button>
                    <div className="auth-form__error-message-container">
                        {errors?.response ? (
                            <p className="auth-form__error-message-field">
                                {errors.response}
                            </p>
                        ):(null)}
                    </div>
                    <Link to="registration" className="auth-modal__reg-link">Зарегистрироваться</Link>
                </Form>
            </div>    
        </>
    )
}