import { useState, useEffect } from "react";
import style from "./Form.module.css";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    email: "",
    tel: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    email: "",
    tel: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    setIsFormValid(
      formData.firstName.trim() !== "" &&
        !isNaN(formData.age) &&
        formData.tel.trim() !== "" &&
        formData.email.trim() !== "" &&
        /\S+@\S+\.\S+/.test(formData.email.trim())
    );
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};
    if (
      !/^[a-zA-Z]+$/.test(formData.firstName.trim()) ||
      /\d/.test(formData.firstName.trim())
    ) {
      newErrors.firstName = " Ошибка!!!Введите корректные данные";
      isValid = false;
    } else if (formData.firstName.trim() === "") {
      newErrors.firstName = "Введите корректные данные";
      isValid = false;
    }

    if (formData.lastName.trim() === "") {
      newErrors.lastName = " Введите корректные данные";
      isValid = false;
    } else if (
      !/^[a-zA-Z]+$/.test(formData.lastName.trim()) ||
      /\d/.test(formData.lastName.trim())
    ) {
      newErrors.lastName = " Ошибка!!!Введите корректные данные ";
      isValid = false;
    }

    if (isNaN(formData.age)) {
      newErrors.age = "Введите корректные данные";
      isValid = false;
    }
    if (isNaN(formData.tel)) {
      newErrors.age = "Введите корректные данные";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Введите корректные данные";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = "Ошибка!!!Введите корректные данные ";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsFormSubmitted(true);

      setTimeout(() => {
        setIsFormSubmitted(false);
        setFormData({
          firstName: "",
          lastName: "",
          age: 0,
          email: "",
          tel: "",
        });
      }, 3000);

      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.form}>
        <label>First Name:</label>
        <input
          // pattern="[A-Za-z]+"
          required
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          onFocus={() => setIsFormSubmitted(false)}
          onBlur={validateForm}
        />
        {errors.firstName && (
          <span className={style.span}>{errors.firstName}</span>
        )}

        <label>Last Name:</label>
        <input
          // pattern="[A-Za-z]+"
          required
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          onFocus={() => setIsFormSubmitted(false)}
          onBlur={validateForm}
        />
        {errors.lastName && (
          <span className={style.span}>{errors.lastName}</span>
        )}

        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          onFocus={() => setIsFormSubmitted(false)}
          onBlur={validateForm}
        />
        {errors.age && <span className={style.span}>{errors.age}</span>}

        <label>Telephone:</label>
        <input
          type="tel"
          name="tel"
          value={formData.tel}
          onChange={handleChange}
          onFocus={() => setIsFormSubmitted(false)}
          onBlur={validateForm}
        />
        {errors.tel && <span className={style.span}>{errors.tel}</span>}

        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => setIsFormSubmitted(false)}
          onBlur={validateForm}
        />
        {errors.email && <span className={style.span}>{errors.email}</span>}

        <button
          type="submit"
          // className={`${style.btn}${
          //   isFormSubmitted ? style.isFormSubmitted : ""
          // }`}
          // className={`${style.btn}${isFormSubmitted ? " submit" : ""}${
          //   isFormValid ? " green" : ""
          // }`}
          className={`${style.btn} ${
            isFormSubmitted || isFormValid ? style.submit : ""
          }`}
          disabled={!isFormValid || isFormSubmitted}
          // disabled={!isFormValid || isFormSubmitted}
        >
          {isFormSubmitted ? "Форма отправленно успешно!!!" : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default Form;
// formData: объект, содержащий значения полей формы (firstName, lastName, age, email, tel).
// errors: объект, содержащий сообщения об ошибках для каждого поля формы.
// isFormValid: булевое значение, указывающее, является ли форма допустимой или нет.
// isFormSubmitted: булевое значение, указывающее, была ли форма отправлена.
// Функции:

// useEffect: хук useEffect используется для определения, является ли форма допустимой на основе текущих значений полей formData.
// handleChange: функция, вызываемая при изменении значения полей формы. Она обновляет значения полей formData соответствующим образом.
// validateForm: функция, вызываемая при отправке формы. Она проверяет каждое поле формы на наличие ошибок и возвращает true, если форма допустима, и false, если есть ошибки.
// handleSubmit: функция, вызываемая при отправке формы. Она вызывает функцию validateForm для проверки формы, устанавливает состояние isFormSubmitted в true и сбрасывает значения полей формы после 3 секунд.
// Компонент отображает поля формы (имя, фамилия, возраст, email, телефон) и кнопку отправки. При вводе данных и получении фокуса каждое поле проверяет ошибки и отображает соответствующее сообщение об ошибке. Кнопка отправки становится доступной только при условии, что форма допустима и еще не была отправлена.
