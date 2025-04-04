import React from "react";
import "./ItemList.css"; 

const ItemList = () => {
  const items = [
    "Изучить основы React",
    "Разобраться с компонентами",
    "Настроить стилизацию",
    "Подключить API",
    "Оптимизировать код"
  ];

  return (
    <ul className="custom-list">
      {items.map((item, index) => (
        <li key={index} className="custom-item">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
