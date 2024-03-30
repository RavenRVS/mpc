import { Form, Link, redirect, useActionData } from 'react-router-dom';
import { emailValidation, passwordValidation } from '../../app/validationFunc';
// import { isAdmin, login, getPerson } from '../app/apiRequests';
import "./Registration.css"

export async function action({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    let actionData = { errors: {}, success: false};
    
    if (typeof data.login !== 'string' || data.login.trim() === '') {
        actionData.errors.login = true;
      }

    if (typeof data.name !== 'string' || data.name.trim() === '') {
        actionData.errors.name = true;
    }

    if (typeof data.surname !== 'string' || data.surname.trim() === '') {
        actionData.errors.surname = true;
        }

    if (!emailValidation(data.email)) {
        actionData.errors.email = 'НЕКОРРЕКТНАЯ ПОЧТА!';
        }
    
    if (!passwordValidation(data.password)) {
    actionData.errors.password = 'НЕКОРРЕКТНЫЙ ПАРОЛЬ!';
    }

    if (data.password !== data.passwordRepeat) {
    actionData.errors.passwordRepeat = 'НЕКОРРЕКТНЫЙ ПОВТОРНЫЙ ВВОД ПАРОЛЯ!';
    }

    if (Object.keys(actionData.errors).length === 0) {

    }
  
    return actionData.errors;
  }

export const Registration = () => {
    const errors = useActionData();

    return (
        <>
            <div className="reg-modal__conatiner">
                <div className="reg-modal__title-conatiner">
                    <h2 className="reg-modal__title">Регистрация</h2>
                </div>
                <Form method="post" id="reg-form" className="reg-modal__form">
                    <input id="reg_login" type="text" name="email" className="reg-form__field login-field" placeholder="Введите логин" autoComplete='on'/>
                    <div className="reg-form__error-message-container">
                        {errors?.login ? (
                            <p className="reg-form__error-message-field" >Неккоректный логин</p>
                        ):(null)}
                    </div>
                    <input id="reg_name" type="text" name="email" className="reg-form__field name-field" placeholder="Введите имя" autoComplete='on'/>
                    <div className="reg-form__error-message-container">
                        {errors?.name ? (
                            <p className="reg-form__error-message-field" >Неккоректное имя</p>
                        ):(null)}
                    </div>
                    <input id="reg_last-name" type="text" name="email" className="reg-form__field surname-field" placeholder="Введите фамилию" autoComplete='on'/>
                    <div className="reg-form__error-message-container">
                        {errors?.surname ? (
                            <p className="reg-form__error-message-field" >Неккоректная фамилия</p>
                        ):(null)}
                    </div>
                    <input id="reg_email" type="text" name="email" className="reg-form__field email-field" placeholder="Введите email" autoComplete='on'/>
                    <div className="reg-form__error-message-container">
                        {errors?.email ? (
                            <p className="reg-form__error-message-field" >Неккоректная почта</p>
                        ):(null)}
                    </div>
                    <input 
                        id="reg_password" 
                        type="password"
                        name="password"
                        className="reg-form__field pwd-field"
                        placeholder="Введите пароль"
                        autoComplete='on'
                    />
                        <div className="reg-form__error-message-container">
                        {errors?.password ? (
                            <p className="reg-form__error-message-field">Неккоректный пароль</p>
                        ):(null)}
                    </div>
                    <input 
                        id="reg_rep_password" 
                        type="password"
                        name="password"
                        className="reg-form__field pwd-field"
                        placeholder="Повторно введите пароль"
                        autoComplete='on'
                    />
                        <div className="reg-form__error-message-container">
                        {errors?.password ? (
                            <p className="reg-form__error-message-field">Неккоректный пароль</p>
                        ):(null)}
                    </div>
                    <button type="submit" className="reg-modal__submit-btn">Зарегистрироваться</button>
                    <Link to="/" className="reg-modal__reg-link">Авторизация</Link>
                </Form>
            </div>    
        </>
    )
}