import React, { useState } from "react";
import ReactInputMask from "react-input-mask";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    telephone: "",
    age: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    telephone: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // const handleBlur = (e) => {
  //   const { name, value } = e.target;

  //   // Валидация полей при потере фокуса
  //   if (value.trim() === "") {
  //     setErrors((prevErrors) => ({
  //       ...prevErrors,
  //       [name]: "Поле обязательно для заполнения",
  //     }));
  //   } else {
  //     setErrors((prevErrors) => ({
  //       ...prevErrors,
  //       [name]: "",
  //     }));
  //   }
  // };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (value.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "Поле обязательно для заполнения",
      }));
    } else if (!/^[A-Za-z]+$/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "Поле должно содержать только буквы",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Валидация всех полей перед отправкой формы
    const formValid =
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.telephone.trim() !== "" &&
      formData.age.trim() !== "" &&
      formData.email.trim() !== "";

    if (formValid) {
      // Отправка формы
      console.log("Форма отправлена!");
    } else {
      // Вывод ошибки или реализация другой логики
      console.log("Заполните все поля формы!");
    }
  };

  const isFormValid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.telephone.trim() !== "" &&
    formData.age.trim() !== "" &&
    formData.email.trim() !== "" &&
    Object.values(errors).every((error) => error === "");

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <ReactInputMask
          // mask="AAAAAAAAAAAAAAAAAAAA"
          maskChar=""
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.firstName && <span>{errors.firstName}</span>}
      </div>

      <div>
        <label>Last Name:</label>
        <ReactInputMask
          // mask="AAAAAAAAAAAAAAAAAAAA"
          maskChar=""
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.lastName && <span>{errors.lastName}</span>}
      </div>

      <div>
        <label>Telephone:</label>
        <ReactInputMask
          mask="+992 (999) 99-99-99"
          maskChar=""
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.telephone && <span>{errors.telephone}</span>}
      </div>

      <div>
        <label>Age:</label>
        <ReactInputMask
          mask="99"
          maskChar=""
          name="age"
          value={formData.age}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.age && <span>{errors.age}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.email && <span>{errors.email}</span>}
      </div>

      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
};

export default Form;
