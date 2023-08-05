import { useState } from "react";
import style from "./Form.module.css";
const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    email: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    email: "",
  });

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

    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    if (isNaN(formData.age)) {
      //Функция isNaN() возвращает true, если переданный ей аргумент не является числом.
      newErrors.age = "Age must be a number";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Здесь можно добавить логику отправки данных
      formData.age = parseInt(formData.age);
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.form}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <span>{errors.firstName}</span>}

        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <span>{errors.lastName}</span>}

        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <span>{errors.age}</span>}

        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
