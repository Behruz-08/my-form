// import { useState, useEffect } from "react";
// import style from "../form/Form.module.css";
// import Modal from "../modal/Modal";
// const FormAdd = () => {
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
//   const [isFormValid, setIsFormValid] = useState(false);
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);

//   const [modalOpen, setModalOpen] = useState(false);
//   const [modalData, setModalData] = useState(null);

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData((prevState) => ({
//   //     ...prevState,
//   //     [name]: value,
//   //   }));
//   // };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
//   const validateForm = () => {
//     let isValid = true;
//     let newErrors = {};

//     // Валидация поля First Name

//     if (formData.firstName.trim() === "") {
//       newErrors.firstName = "Введите корректные данные";
//       isValid = false;
//     } else if (
//       !/^[a-zA-Z]+$/.test(formData.firstName.trim()) ||
//       /\d/.test(formData.firstName.trim())
//     ) {
//       newErrors.firstName = "Ошибка! Введите корректные данные";
//       isValid = false;
//     }

//     // Валидация поля Last Name
//     if (formData.lastName.trim() === "") {
//       newErrors.lastName = "Введите корректные данные";
//       isValid = false;
//     } else if (formData.lastName.length < 3) {
//       newErrors.tel = "ошибка! имя не должно быт менше три букви";
//       isValid = false;
//     } else if (
//       !/^[a-zA-Z]+$/.test(formData.lastName.trim()) ||
//       /\d/.test(formData.lastName.trim())
//     ) {
//       newErrors.lastName = "Ошибка! Введите корректные данные";
//       isValid = false;
//     }

//     // Валидация поля Age
//     if (isNaN(formData.age) || formData.age.trim() === "") {
//       newErrors.age = "Введите корректные данные";
//       isValid = false;
//     } else if (formData.age < 16 || formData.age > 70) {
//       newErrors.age = "Возраст должен быть от 16 до 70";
//       isValid = false;
//     }

//     // Валидация поля Telephone
//     if (formData.tel.trim() === "") {
//       newErrors.tel = "Введите номер телефона";
//       isValid = false;
//     } else if (formData.tel.length < 13) {
//       newErrors.tel = "ошибка! не хватает  цифра";
//       isValid = false;
//     } else if (!/^\+992[0-9]{9,}$/.test(formData.tel.trim())) {
//       newErrors.tel = "ошибка! номер должен начатся с +992 ";
//       isValid = false;
//     }

//     // Валидация поля Email
//     if (formData.email.trim() === "") {
//       newErrors.email = "Введите корректные данные";
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
//       newErrors.email = "Ошибка! Введите корректные данные";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setIsFormSubmitted(true);
//       setIsFormSubmitted(true);
//       setModalOpen(true);
//       setTimeout(() => {
//         setIsFormSubmitted(false);
//         setModalOpen(false);
//         setModalData(null);
//         setFormData({
//           firstName: "",
//           lastName: "",
//           age: "",
//           email: "",
//           tel: "",
//         });
//       }, 3000);

//       console.log(formData);
//     }
//   };

//   useEffect(() => {
//     setIsFormValid(
//       formData.firstName.trim() !== "" &&
//         formData.lastName.trim() !== "" &&
//         !isNaN(formData.age) &&
//         formData.tel.trim() !== "" &&
//         formData.email.trim() !== "" &&
//         /\S+@\S+\.\S+/.test(formData.email.trim())
//     );
//   }, [formData]);

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
//           onBlur={validateForm}
//         />{" "}
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
//           onBlur={validateForm}
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
//           onBlur={validateForm}
//         />{" "}
//         {errors.age && <span className={style.span}>{errors.age}</span>}
//         <label>Telephone:</label>
//         <input
//           type="tel"
//           name="tel"
//           value={formData.tel}
//           onChange={handleChange}
//           onFocus={() => setIsFormSubmitted(false)}
//           onBlur={validateForm}
//         />{" "}
//         {errors.tel && <span className={style.span}>{errors.tel}</span>}
//         <label>Email:</label>
//         <input
//           type="text"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           onFocus={() => setIsFormSubmitted(false)}
//           onBlur={validateForm}
//         />{" "}
//         {errors.email && <span className={style.span}>{errors.email}</span>}
//         <button
//           type="submit"
//           className={`${style.btn} ${isFormValid ? style.submit : ""} ${
//             isFormSubmitted ? style.nextSubmit : ""
//           }`}
//           disabled={!isFormValid}
//           submit={"Форма успешно заполнена"}
//         >
//           {isFormSubmitted
//             ? "Форма отправлена успешно!"
//             : isFormValid
//             ? "Форма успешно заполнена"
//             : "Заполните все поля ввода"}
//         </button>
//         <Modal closeModal={() => setModalOpen(false)} modalData={modalData} />
//         <Modal />
//       </div>
//     </form>
//   );
// };

// export default FormAdd;
