import React, { useState } from "react";
import style from "./Form.module.css";
// import Modal from "../modal/Modal";
const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    tel: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    age: "",
    tel: "",
    email: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // const [modalOpen, setModalOpen] = useState(false);
  // const [modalData, setModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFocus = (name) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: { ...prevErrors[name], focused: true },
    }));

    setIsFormSubmitted(false);
  };

  const handleBlur = (name) => {
    const errorsCopy = {...errors};
    delete  errorsCopy[name].focused
    // setErrorState({...errorState,...newErrors});
    !!Object.keys(errors).length &&
    Object
    .values(errors)[0][`${name}`]? 


    const { value } = formData[name];
    validateForm(name, value);

  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    // Валидация поля First Name

    if (formData.firstName.trim() === "") {
      newErrors.firstName = "Введите корректные данные";
      isValid = false;
    } else if (
      !/^[a-zA-Z]+$/.test(formData.firstName.trim()) ||
      /\d/.test(formData.firstName.trim())
    ) {
      newErrors.firstName = "Ошибка! Введите корректные данные";
      isValid = false;
    }

    // Валидация поля Last Name
    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Введите корректные данные";
      isValid = false;
    } else if (formData.lastName.length < 3) {
      newErrors.tel = "ошибка! имя не должно быт менше три букви";
      isValid = false;
    } else if (
      !/^[a-zA-Z]+$/.test(formData.lastName.trim()) ||
      /\d/.test(formData.lastName.trim())
    ) {
      newErrors.lastName = "Ошибка! Введите корректные данные";
      isValid = false;
    }

    // Валидация поля Age
    if (isNaN(formData.age) || formData.age.trim() === "") {
      newErrors.age = "Введите корректные данные";
      isValid = false;
    } else if (formData.age < 16 || formData.age > 70) {
      newErrors.age = "Возраст должен быть от 16 до 70";
      isValid = false;
    }

    // Валидация поля Telephone
    if (formData.tel.trim() === "") {
      newErrors.tel = "Введите номер телефона";
      isValid = false;
    } else if (formData.tel.length < 13) {
      newErrors.tel = "ошибка! не хватает  цифра";
      isValid = false;
    } else if (!/^\+992[0-9]{9,}$/.test(formData.tel.trim())) {
      newErrors.tel = "ошибка! номер должен начатся с +992 ";
      isValid = false;
    }

    // Валидация поля Email
    if (formData.email.trim() === "") {
      newErrors.email = "Введите корректные данные";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = "Ошибка! Введите корректные данные";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const controlValid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    !isNaN(formData.age) &&
    formData.tel.trim() !== "" &&
    formData.email.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (controlValid) {
      setIsFormSubmitted(true);

      // setModalOpen(true);
      setTimeout(() => {
        setIsFormSubmitted(false);
        // setModalOpen(false);
        // setModalData(null);
        setFormData({
          firstName: "",
          lastName: "",
          age: "",
          email: "",
          tel: "",
        });
      }, 3000);

      console.log(formData);
      setSubmittedData(formData);
      setShowModal(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={style.form}>
          <label>First Name:</label>
          <input
            pattern="[A-Za-z]+"
            required="required"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onFocus={() => handleFocus("firstName")}
            onBlur={() => handleBlur("firstName")}
          />
          {errors.firstName.focused && (
            <span className={style.span}>{errors.firstName.value}</span>
          )}

          <label>Last Name:</label>
          <input
            pattern="[A-Za-z]+"
            required="required"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onFocus={() => handleFocus("lastName")}
            onBlur={() => handleBlur("lastName")}
          />
          {errors.lastName.focused && (
            <span className={style.span}>{errors.lastName.value}</span>
          )}
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            onFocus={() => handleFocus("age")}
            onBlur={() => handleBlur("age")}
          />
          {errors.age.focused && (
            <span className={style.span}>{errors.age.value}</span>
          )}
          <label>Telephone:</label>
          <input
            type="tel"
            name="tel"
            value={formData.tel}
            onChange={handleChange}
            onFocus={() => handleFocus("tel")}
            onBlur={() => handleBlur("tel")}
          />
          {errors.tel.focused && (
            <span className={style.span}>{errors.tel.value}</span>
          )}
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => handleFocus("email")}
            onBlur={() => handleBlur("email")}
          />
          {errors.email.focused && (
            <span className={style.span}>{errors.email.value}</span>
          )}
          <button
            type="submit"
            className={`${style.btn} ${controlValid ? style.submit : ""} ${
              isFormSubmitted ? style.nextSubmit : ""
            }`}
            disabled={!controlValid}
            submit={"Форма успешно заполнена"}
          >
            {isFormSubmitted
              ? "Форма отправлена успешно!"
              : controlValid
              ? "Форма успешно заполнена"
              : "Заполните все поля ввода"}
          </button>
          {showModal && (
            <div className={style.modal}>
              <h2>Отправленные данные</h2>
              <p>First Name: {submittedData.firstName}</p>
              <p>Last Name: {submittedData.lastName}</p>
              <p>Age: {submittedData.age}</p>
              <p>Telephone: {submittedData.tel}</p>
              <p>Email: {submittedData.email}</p>
              <button onClick={() => setShowModal(false)}>Закрыть</button>
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default Form;
