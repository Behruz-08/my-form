// import { useState } from "react";
// import style from "../form/Form.module.css";
// import Modal from "../modal/Modal";
// const FormAdd = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     age: "",
//     tel: "",
//     email: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isFormValid, setIsFormValid] = useState(false);
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//   const [modalOpen, setModalOpen] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.firstName.match(/^[A-Za-z]+$/)) {
//       newErrors.firstName = "First name must only contain letters";
//     }
//     if (!formData.lastName.match(/^[A-Za-z]+$/)) {
//       newErrors.lastName = "Last name must only contain letters";
//     }
//     if (formData.age < 18) {
//       newErrors.age = "Age must be at least 18";
//     }
//     if (!formData.tel.match(/^\d{10}$/)) {
//       newErrors.tel = "Telephone must be a 10-digit number";
//     }
//     if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
//       newErrors.email = "Email must be a valid email address";
//     }
//     setErrors(newErrors);
//     setIsFormValid(Object.keys(newErrors).length === 0);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsFormSubmitted(true);

//     if (isFormValid) {
//       setModalOpen(true);
//     }
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className={style.form}>
//         <label>First Name:</label>
//         <input
//           pattern="[A-Za-z]+"
//           required
//           type="text"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//           onFocus={() => setIsFormSubmitted(false)}
//           onBlur={validateForm}
//         />
//         {errors.firstName && (
//           <span className={style.span}>{errors.firstName}</span>
//         )}

//         <label>Last Name:</label>
//         <input
//           pattern="[A-Za-z]+"
//           required
//           type="text"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//           onFocus={() => setIsFormSubmitted(false)}
//           onBlur={validateForm}
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
//           onBlur={validateForm}
//         />
//         {errors.age && <span className={style.span}>{errors.age}</span>}

//         <label>Telephone:</label>
//         <input
//           type="tel"
//           name="tel"
//           value={formData.tel}
//           onChange={handleChange}
//           onFocus={() => setIsFormSubmitted(false)}
//           onBlur={validateForm}
//         />
//         {errors.tel && <span className={style.span}>{errors.tel}</span>}

//         <label>Email:</label>
//         <input
//           type="text"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           onFocus={() => setIsFormSubmitted(false)}
//           onBlur={validateForm}
//         />
//         {errors.email && <span className={style.span}>{errors.email}</span>}

//         <button
//           type="submit"
//           className={`${style.btn} ${isFormValid ? style.submit : ""} ${
//             isFormSubmitted ? style.nextSubmit : ""
//           }`}
//           disabled={!isFormValid}
//         >
//           {isFormSubmitted
//             ? "Форма отправлена успешно!"
//             : isFormValid
//             ? "Форма успешно заполнена"
//             : "Заполните все поля ввода"}
//         </button>

//         {modalOpen && <Modal data={formData} onClose={closeModal} />}
//       </div>
//     </form>
//   );
// };
// export default FormAdd;
