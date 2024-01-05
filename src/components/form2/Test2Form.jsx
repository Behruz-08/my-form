import React, { useState } from "react";
import ReactInputMask from "react-input-mask";

import style from "./Test2Form.module.css";
import Modal from "../modal/Modal";



export const Test2Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    tel: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    tel: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "age") {
      setFormData((prevState) => ({
        ...prevState,
        age: value,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));

      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
        validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";
    if (value.trim() === "") {
      error = "Поле обязательно для заполнения";
    } else if (name === "firstName") {
      if (!/^[a-zA-Z]+$/.test(value.trim()) || /\d/.test(value.trim())) {
        error = "Ошибка! Введите корректные данные";
      }
    } else if (name === "lastName") {
      if (!/^[a-zA-Z]+$/.test(value.trim()) || /\d/.test(value.trim())) {
        error = "Ошибка! Введите корректные данные";
      } else if (value.trim().length < 3) {
        error = "Ошибка! Имя не должно быть меньше трех букв";
      }
    } else if (name === "age") {
      if (isNaN(value) || value.trim() === "") {
        error = "Введите корректные данные";
      } else if (value < 16 || value > 70) {
        error = "Возраст должен быть от 16 до 70";
      }
    } else if (name === "tel") {
      if (value.trim().length < 13) {
        error = "Ошибка! Не хватает цифры";
      } else if (!/^\+992/.test(value.trim())) {
        error = "Ошибка! Номер должен начинаться с +992";
      }
    } else if (name === "email") {
      if (!/\S+@\S+\.\S+/.test(value.trim())) {
        error = "Ошибка! Введите корректные данные";
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === "firstName") {
      validateField("firstName", value);
    } else if (name === "lastName") {
      validateField("lastName", value);
    } else if (name === "age") {
      validateField("age", value);
    } else if (name === "tel") {
      validateField("tel", value);
    } else if (name === "email") {
      validateField("email", value);
    }

    if (errors[name]) {
      setShowModal(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.firstName.trim() === "" &&
      formData.lastName.trim() === "" &&
      formData.age.trim() === "" &&
      formData.tel.trim() === "" &&
      formData.email.trim() === ""
    ) {
      setErrors({
        firstName:
          formData.firstName.trim() === ""
            ? "Поле обязательно для заполнения"
            : "",
        lastName:
          formData.lastName.trim() === ""
            ? "Поле обязательно для заполнения"
            : "",
        age:
          formData.age.trim() === "" ? "Поле обязательно для заполнения" : "",
        tel:
          formData.tel.trim() === "" ? "Поле обязательно для заполнения" : "",
        email:
          formData.email.trim() === "" ? "Поле обязательно для заполнения" : "",
      });

      setShowModal(true);
      return;
    }

    setIsFormSubmitted(true);
    setTimeout(() => {
      setIsFormSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        tel: "",
      });
    }, 3000);

    setSubmittedData(formData);
    setShowModal(true);
  };

  const controlValid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.age !== "" &&
    formData.tel.trim() !== "" &&
    formData.email.trim() !== "" &&
    Object.values(errors).every((error) => error === "");

  return (
    <div className={style.LoginPage__wrapper}>
      <div className={style.LoginPage__container}>
    <form className={style.user__card} onSubmit={handleSubmit}>
         <div className={style.user__circle}></div>
      <div className={style.form}>
        <label>First Name:</label>
        <ReactInputMask
          className={style.inputmask}
          mask="aaaaaaaaaaaaaaaaaaaaaa"
          maskChar=""
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={() => setIsFormSubmitted(false)}
        />

        {errors.firstName && (
          <span className={style.span}>{errors.firstName}</span>
        )}

        <label htmlFor="">Last Name</label>

        <ReactInputMask
          className={style.inputmask}
          mask="aaaaaaaaaaaaaaaaaaaaaa"
          maskChar=""
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={() => setIsFormSubmitted(false)}
        />
        {errors.lastName && (
          <span className={style.span}>{errors.lastName}</span>
        )}
        <label>Age:</label>
        <ReactInputMask
          className={style.inputmask}
          mask="99"
          maskChar=""
          name="age"
          value={formData.age}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={() => setIsFormSubmitted(false)}
        />
        {errors.age && <span className={style.span}>{errors.age}</span>}

        <label>Telephone:</label>
        <ReactInputMask
          className={style.inputmask}
          mask="+999 (999) 99-99-99"
          maskChar="-"
          name="tel"
          value={formData.tel || "+992"}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={() => setIsFormSubmitted(false)}
        />
        {errors.tel && <span className={style.span}>{errors.tel}</span>}

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => setIsFormSubmitted(false)}
          onBlur={handleBlur}
        />
        {errors.email && <span className={style.span}>{errors.email}</span>}

        <button
          type="submit"
          className={`${style.btn} ${controlValid ? style.submit : ""} ${
            isFormSubmitted ? style.nextSubmit : ""
          }`}
          disabled={!controlValid}
        >
          {isFormSubmitted
            ? "Форма отправлена успешно!"
            : controlValid
            ? "Форма успешно заполнена"
            : "Заполните все поля ввода"}
        </button>
      </div>
      <Modal 
      showModal={showModal}
      submittedData={submittedData}
      onClose={() => setShowModal(false)}
      />
    </form>
    </div>
    </div>
  );
};
