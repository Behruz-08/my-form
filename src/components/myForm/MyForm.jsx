import React, { useState } from "react";
import style from "./MyForm.module.css";
export default function MyForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Обработка отправки формы
    formData.age = parseInt(formData.age);
    // Проверка, если значение age равно -1 или 0, не отправлять форму
    if (formData.age < 0 || formData.age === 0) {
      return;
    }
  };

  console.log(formData);
  // };

  // const handleChange = (event) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };

  //   В представленном коде, форма является контролируемой. Значение каждого инпута связано с соответствующим свойством состояния `formData` с помощью атрибута `value` инпута. При изменении значения инпута, вызывается функция `handleChange`, которая обновляет соответствующее свойство `formData` с помощью хука `useState`.

  // Таким образом, значения инпутов контролируются через состояние формы `formData` и обновляются с помощью функции `handleChange`. При отправке формы вызывается обработчик `handleSubmit`, который получает значения всех полей формы.

  // Итак, в данном коде используется контролируемый подход для работы с формой, где значения инпутов управляются через состояние и обновляются с помощью функции `handleChange`.

  const [validations, setValidations] = useState({
    firstName: true,
    lastName: true,
    age: true,
    email: true,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    let isValid = true;

    // Валидация имени и фамилии - не должны быть пустыми
    if (name === "firstName" || name === "lastName") {
      isValid = value.trim() !== "";
    }

    // Валидация возраста - должен быть положительным числом
    if (name === "age") {
      isValid = value >= 0 && Number.isInteger(Number(value));
    }

    // Валидация email - используем простейшую проверку наличия символа @

    if (name === "email") {
      isValid = value.includes("@");
    }

    setValidations({ ...validations, [name]: isValid });
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        required
        placeholder="firstName"
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className={!validations.firstName ? "invalid" : ""}
      />
      {!validations.firstName && (
        <span className="error-message">Please enter a first name</span>
      )}
      <input
        required
        placeholder="lastName"
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        className={!validations.lastName ? "invalid" : ""}
      />{" "}
      {!validations.lastName && (
        <span className="error-message">Please enter a last name</span>
      )}
      <input
        required
        placeholder="age"
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        className={!validations.age ? "invalid" : ""}
      />{" "}
      {!validations.age && (
        <span className="error-message">Please enter a valid age</span>
      )}
      <input
        required
        placeholder="email"
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className={!validations.email ? "invalid" : ""}
      />{" "}
      {!validations.email && (
        <span className="error-message">Please enter a valid email</span>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}
