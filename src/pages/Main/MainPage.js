// Импорт необходимых модулей
import React from 'react';
import './MainPage.css'; // Предполагаем, что стили находятся в этом файле
import profileImage from "./Images/logo"; // Путь к изображению, можно добавить вручную
import Header from '../../components/Header/Header.js'; // Подключаем компонент Header
import Footer from '../../components/Footer/Footer.js';

function LoginPage() {
  return (
    <div className="container">
      {/* Навигационное меню */}
      <Header />
      {/* <nav className="nav">
        <a href="#bio">ABOUT</a>
        <a href="/courier_profile">PROFILE</a>
        <a href="#podcast">DELIVERY</a>
        <a href="#blog">FOR COURIERS</a>
        <a href="/login" className="sign-in-btn">Sign In</a>
      </nav> */}

      {/* Основное содержимое */}
      <div className="content">
        <div className="bio-info">
        <h1>Добро пожаловать в «Скорость Света»</h1>
          <p className="description">
        
    <p>Оптимизируйте свой бизнес с помощью современного программного средства, разработанного для эффективного управления доставками. Мы знаем, как важно доставить заказ вовремя и с минимальными затратами.</p>

    <h2>Почему выбирают нас?</h2>
    <ul>
      <li><strong>Быстрая обработка заказов</strong> - автоматизированный процесс позволяет сократить время на назначение курьера и доставку.</li>
      <li><strong>Полная прозрачность</strong> — мониторинг всех этапов доставки в реальном времени.</li>
      <li><strong>Удобный интерфейс</strong> — интуитивно понятная система для менеджеров, курьеров и клиентов.</li>
      <li><strong>Аналитика и отчеты</strong> - анализ производительности, расходов и ключевых показателей в один клик.</li>
      <li><strong>Гибкость и масштабируемость</strong> — легко адаптируется под бизнес любого размера и растет вместе с вами.</li>
    </ul>

    <p>Наше ПО - это не просто инструмент, это ваш партнер в развитии!</p>

    <p>Управляйте заказами, контролируйте расходы, улучшайте производительность и повышайте уровень клиентского сервиса с «Скоростью Света». Автоматизируйте процессы — доставляйте быстрее!</p>

    <div class="cta">
      <p>Начните уже сегодня и станьте лидером в области курьерской доставки.</p>
    </div>
          </p>
          <p className="handle">
            @<span className="bold">STCS.com</span>
          </p>
          <div className="social-icons">
            <a href="https://instagram.com">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="image-container">
          <img src={profileImage} alt="Bethany Jones" />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LoginPage;