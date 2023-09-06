// import { useState } from "react";

// const TestForm = () => {
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
//   // const [isFormValid, setIsFormValid] = useState(false);
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);

//   // отображение модалного окна
//   const [showModal, setShowModal] = useState(false);
//   const [submittedData, setSubmittedData] = useState({});

//   console.log(formData?.age);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));

//     let controlValid = true;
//     let newErrors = {};

//     //   // Валидация поля First Name

//     if (formData.firstName.trim() === "") {
//       newErrors.firstName = "Введите корректные данные";
//       controlValid = false;
//     } else if (
//       !/^[a-zA-Z]+$/.test(formData.firstName.trim()) ||
//       /\d/.test(formData.firstName.trim())
//     ) {
//       newErrors.firstName = "Ошибка! Введите корректные данные";
//       controlValid = false;
//     }

//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       firstName: "",
//     }));

//     // Валидация поля Last Name
//     if (formData.lastName.trim() === "") {
//       newErrors.lastName = "Введите корректные данные";
//       controlValid = false;
//     } else if (formData.lastName.length < 3) {
//       newErrors.lastName = "ошибка! имя не должно быт менше три букви";
//       controlValid = false;
//     } else if (
//       !/^[a-zA-Z]+$/.test(formData.lastName.trim()) ||
//       /\d/.test(formData.lastName.trim())
//     ) {
//       newErrors.lastName = "Ошибка! Введите корректные данные";
//       controlValid = false;
//     }

//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       lastName: "",
//     }));

//     // Валидация поля Age
//     if (isNaN(formData.age) || formData.age.trim() === "") {
//       newErrors.age = "Введите корректные данные";
//       controlValid = false;
//     } else if (formData.age < 16 || formData.age > 70) {
//       newErrors.age = "Возраст должен быть от 16 до 70";
//       controlValid = false;
//     }
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       age: "",
//     }));
//     // Валидация поля Telephone
//     if (formData.tel.trim() === "") {
//       newErrors.tel = "Введите номер телефона";
//       controlValid = false;
//     } else if (formData.tel.length < 13) {
//       newErrors.tel = "ошибка! не хватает  цифра";
//       controlValid = false;
//     } else if (!/^\+992[0-9]{9,}$/.test(formData.tel.trim())) {
//       newErrors.tel = "ошибка! номер должен начатся с +992 ";
//       controlValid = false;
//     }
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       tel: "",
//     }));

//     // Валидация поля Email
//     if (formData.email.trim() === "") {
//       newErrors.email = "Введите корректные данные";
//       controlValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
//       newErrors.email = "Ошибка! Введите корректные данные";
//       controlValid = false;
//     }

//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       email: "",
//     }));

//     // setErrors(newErrors);
//     // return isValid;
//     // setErrors((prevErrors) => ({
//     //   ...prevErrors,
//     //   firstName: "",
//     // }));
//   };

//   // const validateForm = () => {
//   //   let isValid = true;
//   //   let newErrors = {};

//   //   // Валидация поля First Name

//   //   if (formData.firstName.trim() === "") {
//   //     newErrors.firstName = "Введите корректные данные";
//   //     isValid = false;
//   //   } else if (
//   //     !/^[a-zA-Z]+$/.test(formData.firstName.trim()) ||
//   //     /\d/.test(formData.firstName.trim())
//   //   ) {
//   //     newErrors.firstName = "Ошибка! Введите корректные данные";
//   //     isValid = false;
//   //   }

//   //   // Валидация поля Last Name
//   //   if (formData.lastName.trim() === "") {
//   //     newErrors.lastName = "Введите корректные данные";
//   //     isValid = false;
//   //   } else if (formData.lastName.length < 3) {
//   //     newErrors.tel = "ошибка! имя не должно быт менше три букви";
//   //     isValid = false;
//   //   } else if (
//   //     !/^[a-zA-Z]+$/.test(formData.lastName.trim()) ||
//   //     /\d/.test(formData.lastName.trim())
//   //   ) {
//   //     newErrors.lastName = "Ошибка! Введите корректные данные";
//   //     isValid = false;
//   //   }

//   //   // Валидация поля Age
//   //   if (isNaN(formData.age) || formData.age.trim() === "") {
//   //     newErrors.age = "Введите корректные данные";
//   //     isValid = false;
//   //   } else if (formData.age < 16 || formData.age > 70) {
//   //     newErrors.age = "Возраст должен быть от 16 до 70";
//   //     isValid = false;
//   //   }

//   //   // Валидация поля Telephone
//   //   if (formData.tel.trim() === "") {
//   //     newErrors.tel = "Введите номер телефона";
//   //     isValid = false;
//   //   } else if (formData.tel.length < 13) {
//   //     newErrors.tel = "ошибка! не хватает  цифра";
//   //     isValid = false;
//   //   } else if (!/^\+992[0-9]{9,}$/.test(formData.tel.trim())) {
//   //     newErrors.tel = "ошибка! номер должен начатся с +992 ";
//   //     isValid = false;
//   //   }

//   //   // Валидация поля Email
//   //   if (formData.email.trim() === "") {
//   //     newErrors.email = "Введите корректные данные";
//   //     isValid = false;
//   //   } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
//   //     newErrors.email = "Ошибка! Введите корректные данные";
//   //     isValid = false;
//   //   }

//   //   setErrors(newErrors);
//   //   return isValid;
//   // };

//   const validateField = (name, value) => {
//     let error = {};
//     if (value.trim() === "") {
//       error = "Поле обязательно для заполнения";
//     }
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: error,
//     }));
//   };

//   const handleBlur = (e) => {
//     const { name, value } = e.target;
//     validateField(name, value);

//     console.log(validateField);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (controlValid) {
//       setIsFormSubmitted(true);
//       setTimeout(() => {
//         setIsFormSubmitted(false);
//         setFormData({
//           firstName: "",
//           lastName: "",
//           age: "",
//           email: "",
//           tel: "",
//         });
//       }, 3000);

//       console.log(formData);
//       setSubmittedData(formData);
//       setShowModal(true);
//     }
//   };

//   const controlValid =
//     formData.firstName.trim() !== "" &&
//     formData.lastName.trim() !== "" &&
//     !isNaN(formData.age) &&
//     formData.tel.trim() !== "" &&
//     formData.email.trim() !== "" &&
//     /\S+@\S+\.\S+/.test(formData.email.trim());

//   console.log(errors.firstName);

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
//         />{" "}
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
//         />{" "}
//         {errors.age && <span className={style.span}>{errors.age}</span>}
//         <label>Telephone:</label>
//         <input
//           type="tel"
//           name="tel"
//           value={formData.tel}
//           onChange={handleChange}
//           onFocus={() => setIsFormSubmitted(false)}
//           onBlur={handleBlur}
//         />{" "}
//         {errors.tel && <span className={style.span}>{errors.tel}</span>}
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           onFocus={() => setIsFormSubmitted(false)}
//           onBlur={handleBlur}
//         />{" "}
//         {errors.email && <span className={style.span}>{errors.email}</span>}
//         <button
//           type="submit"
//           className={`${style.btn} ${controlValid ? style.submit : ""} ${
//             isFormSubmitted ? style.nextSubmit : ""
//           }`}
//           disabled={!controlValid}
//           submit={"Форма успешно заполнена"}
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

// export default TestForm;
