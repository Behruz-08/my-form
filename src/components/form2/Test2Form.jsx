// import { useState } from "react";
// import style from "../form/Form.module.css";

// const Test2Form = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     age: "",
//     email: "",
//     tel: "",
//   });
//   const [errors, setErrors] = useState({
//     firstName: "",
//     lastName: "",
//     age: "",
//     email: "",
//     tel: "",
//   });
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);

//   const [showModal, setShowModal] = useState(false);
//   const [submittedData, setSubmittedData] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));

//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "", // Сбрасываем ошибку при изменении значения поля
//     }));
//   };

//   const validateField = (name, value) => {
//     let error = "";
//     if (value.trim() === "") {
//       error = "Поле обязательно для заполнения";
//     } else if (name === "firstName") {
//       if (!/^[a-zA-Z]+$/.test(value.trim()) || /\d/.test(value.trim())) {
//         error = "Ошибка! Введите корректные данные";
//       }
//     } else if (name === "lastName") {
//       if (!/^[a-zA-Z]+$/.test(value.trim()) || /\d/.test(value.trim())) {
//         error = "Ошибка! Введите корректные данные";
//       } else if (value.trim().length < 3) {
//         error = "Ошибка! Имя не должно быть меньше трех букв";
//       }
//     } else if (name === "age") {
//       if (isNaN(value) || value.trim() === "") {
//         error = "Введите корректные данные";
//       } else if (value < 16 || value > 70) {
//         error = "Возраст должен быть от 16 до 70";
//       }
//     } else if (name === "tel") {
//       if (value.trim().length < 13) {
//         error = "Ошибка! Не хватает цифры";
//       } else if (!/^\+992[0-9]{9,}$/.test(value.trim())) {
//         error = "Ошибка! Номер должен начинаться с +992";
//       }
//     } else if (name === "email") {
//       if (!/\S+@\S+\.\S+/.test(value.trim())) {
//         error = "Ошибка! Введите корректные данные";
//       }
//     }

//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: error,
//     }));
//   };

//   const handleBlur = (e) => {
//     const { name, value } = e.target;

//     if (name === "firstName") {
//       validateField("firstName", value);
//     } else if (name === "lastName") {
//       validateField("lastName", value);
//     } else if (name === "age") {
//       validateField("age", value);
//     } else if (name === "tel") {
//       validateField("tel", value);
//     } else if (name === "email") {
//       validateField("email", value);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (
//       formData.firstName.trim() === "" ||
//       formData.lastName.trim() === "" ||
//       formData.age.trim() === "" ||
//       formData.tel.trim() === "" ||
//       formData.email.trim() === ""
//     ) {
//       setErrors({
//         firstName: "Введите корректные данные",
//         lastName: "Введите корректные данные",
//         age: "Введите корректные данные",
//         tel: "Введите номер телефона",
//         email: "Введите корректные данные",
//       });
//       return;
//     }

//     setIsFormSubmitted(true);
//     setTimeout(() => {
//       setIsFormSubmitted(false);
//       setFormData({
//         firstName: "",
//         lastName: "",
//         age: "",
//         email: "",
//         tel: "",
//       });
//     }, 3000);

//     setSubmittedData(formData);
//     setShowModal(true);
//   };

//   const controlValid =
//     formData.firstName.trim() !== "" &&
//     formData.lastName.trim() !== "" &&
//     formData.age.trim() !== "" &&
//     formData.tel.trim() !== "" &&
//     formData.email.trim() !== "" &&
//     Object.values(errors).every((error) => error === "");

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className={style.form}>
//         <label>First Name:</label>
//         <input
//           pattern="[A-Za-z]+"
//           required="required"
//           type="text"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//           onFocus={() => setIsFormSubmitted(false)}
//           onBlur={handleBlur}
//         />

//         {errors.firstName && (
//           <span className={style.span}>{errors.firstName}</span>
//         )}

//         <label>Last Name:</label>
//         <input
//           pattern="[A-Za-z]+"
//           required="required"
//           type="text"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//           onFocus={() => setIsFormSubmitted(false)}
//           onBlur={handleBlur}
//         />

//         {errors.lastName && (
//           <span className={style.span}>{errors.lastName}</span>
//         )}

//         <label>Age:</label>
//         <input
//           type="number"
//           name="age"
//           value={formData.age}
//           onChange={handleChange}
//           onFocus={() => setIsFormSubmitted(false)}
//           onBlur={handleBlur}
//         />

//         {errors.age && <span className={style.span}>{errors.age}</span>}

//         <label>Telephone:</label>
//         <input
//           type="tel"
//           name="tel"
//           value={formData.tel}
//           onChange={handleChange}
//           onFocus={() => setIsFormSubmitted(false)}
//           onBlur={handleBlur}
//         />

//         {errors.tel && <span className={style.span}>{errors.tel}</span>}

//         <label>Email:</label>
//         <input
//           type="text"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           onFocus={() => setIsFormSubmitted(false)}
//           onBlur={handleBlur}
//         />

//         {errors.email && <span className={style.span}>{errors.email}</span>}

//         <button
//           type="submit"
//           className={`${style.btn} ${controlValid ? style.submit : ""} ${
//             isFormSubmitted ? style.nextSubmit : ""
//           }`}
//           disabled={!controlValid}
//         >
//           {isFormSubmitted
//             ? "Форма отправлена успешно!"
//             : controlValid
//             ? "Форма успешно заполнена"
//             : "Заполните все поля ввода"}
//         </button>

//         {showModal && (
//           <div className={style.modal}>
//             <h2>Отправленные данные</h2>
//             <p>First Name: {submittedData.firstName}</p>
//             <p>Last Name: {submittedData.lastName}</p>
//             <p>Age: {submittedData.age}</p>
//             <p>Telephone: {submittedData.tel}</p>
//             <p>Email: {submittedData.email}</p>
//             <button onClick={() => setShowModal(false)}>Закрыть</button>
//           </div>
//         )}
//       </div>
//     </form>
//   );
// };

// export default Test2Form;
//import { useState } from "react";
import style from "../form/Form.module.css";
import { useState } from "react";
const Test2Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    email: "",
    tel: "",
  });

  console.log(formData);
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
        age: Number(value),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));

      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "", // Сбрасываем ошибку при изменении значения поля
      }));
    }
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
      } else if (!/^\+992[0-9]{9,}$/.test(value.trim())) {
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
          onFocus={() => setIsFormSubmitted(false)}
          onBlur={handleBlur}
        />

        {errors.firstName && (
          <span className={style.span}>{errors.firstName}</span>
        )}

        <label>Last Name:</label>
        <input
          pattern="[A-Za-z]+"
          required="required"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          onFocus={() => setIsFormSubmitted(false)}
          onBlur={handleBlur}
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
          onBlur={handleBlur}
        />

        {errors.age && <span className={style.span}>{errors.age}</span>}

        <label>Telephone:</label>
        <input
          type="tel"
          name="tel"
          value={formData.tel}
          onChange={handleChange}
          onFocus={() => setIsFormSubmitted(false)}
          onBlur={handleBlur}
        />

        {errors.tel && <span className={style.span}>{errors.tel}</span>}

        <label>Email:</label>
        <input
          type="text"
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
  );
};

export default Test2Form;
