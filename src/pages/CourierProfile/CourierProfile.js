import React from "react";
import "./CourierProfile.css";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import profileImage from "./Images/profilepicture"; // Добавьте корректное изображение

function CourierProfile() {
  const courierData = {
    name: "John",
    surname: "Doe",
    phone: "+375 33 29 754 21 21",
    email: "jod@gmail.com",
    region: "Октябрьский",
    vehicle: "Автомобиль",
    efficiency: [85, 85, 85, 85], // Эффективность
    rating: 4, // Рейтинг в звездах
  };

  return (
    <div className="courier-profile-container">
      {/* Header */}
      <Header />

      <div className="courier-profile-content">
        {/* Боковое меню */}
        <div className="sidebar">
          <button className="sidebar-btn">История доставок &gt;</button>
          <button className="sidebar-btn">Доступные заказы &gt;</button>
          <button className="sidebar-btn">График работы &gt;</button>
          <button className="sidebar-btn">Финансы &gt;</button>
          <button className="sidebar-btn">Статистика &gt;</button>
        </div>

        {/* Центральная информация */}
        <div className="profile-main">
          <img
            src={profileImage}
            alt={`${courierData.name} ${courierData.surname}`}
            className="profile-image"
          />
          <h1>{`${courierData.name} ${courierData.surname}`}</h1>
          <div className="rating">
            {"★".repeat(courierData.rating)}
            {"☆".repeat(5 - courierData.rating)}
          </div>
          {/* <div className="profile-details">
            <p><strong>Номер телефона:</strong> {courierData.phone}</p>
            <p><strong>Электронная почта:</strong> {courierData.email}</p>
            <p><strong>Закрепленный район:</strong> {courierData.region}</p>
            <p><strong>Средство передвижения:</strong> {courierData.vehicle}</p>
            <button className="edit-btn">Изменить</button>
          </div> */}
        </div>

        {/* Статистика */}
        <div className="stats">
          <div className="profile-details">
            <p><strong>Номер телефона:</strong> {courierData.phone}</p>
            <p><strong>Электронная почта:</strong> {courierData.email}</p>
            <p><strong>Закрепленный район:</strong> {courierData.region}</p>
            <p><strong>Средство передвижения:</strong> {courierData.vehicle}</p>
            <button className="edit-btn">Изменить</button>
          </div>
          {/* <h3>Статистика:</h3>
          {courierData.efficiency.map((eff, index) => (
            <div key={index} className="efficiency-stat">
              <span>Efficiency: {eff}%</span>
              <div className="efficiency-bar">
                <div
                  className="efficiency-progress"
                  style={{ width: `${eff}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div> */}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default CourierProfile;
