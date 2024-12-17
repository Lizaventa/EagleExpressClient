import React from "react";
import "./Signup.css";

function RegistrationPopup() {
  return (
    <div className="overlay">
      <div className="popup">
        <h2 className="popup-title">Регистрация</h2>
        <form className="registration-form">
          <label htmlFor="name">Логин:</label>
          <input
            type="login"
            id="name"
            name="name"
            placeholder="Введите ваше имя"
            required
          />
           <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Введите пароль"
            required
          />

          <label htmlFor="email">Электронная почта:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Введите email"
            required
          />
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Введите ваше имя"
            required
          />
          <label htmlFor="name">Фамилия:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Введите вашу фамилию"
            required
          />
          <label htmlFor="name">Номер телефона:</label>
          <input
            className="last"
            type="text"
            id="name"
            name="name"
            placeholder="Введите ваш номер телефона"
            required
          />
          

         

          <button type="submit" className="register-button">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPopup;
