import style from "../form/Form.module.css";

const Modal = ({ modalData, onClose }) => {
  return (
    <div className={style.modal}>
      <h2>Форма отправлена успешно!</h2>
      <p>First Name: {modalData.firstName}</p>
      <p>Last Name: {modalData.lastName}</p>
      <p>Age: {modalData.age}</p>
      <p>Email: {modalData.email}</p>
      <p>Telephone: {modalData.tel}</p>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
};

export default Modal;
