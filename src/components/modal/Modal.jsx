
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import "@material-tailwind/react/tailwind.css";

const Modal = ({ showModal, submittedData, onClose }) => {
  if (!showModal) {
    return null;
  }

  return (
    <Dialog size="lg" open={showModal}>
      <DialogHeader>Отправленные данные</DialogHeader>
      <DialogBody>
        <p>First Name: {submittedData.firstName}</p>
        <p>Last Name: {submittedData.lastName}</p>
        <p>Age: {submittedData.age}</p>
        <p>Telephone: {submittedData.tel}</p>
        <p>Email: {submittedData.email}</p>
      </DialogBody>
      <DialogFooter>
        <Button
          color="red"
          buttonType="link"
          onClick={onClose}
          ripple="dark"
        >
          Закрыть
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default Modal;


// import style from "../form2/Test2Form.module.css"
// import React from "react";
// import {
//   Button,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";
 
// export function DialogSizes() {
//   const [size, setSize] = React.useState(null);
 
//   const handleOpen = (value) => setSize(value);
 
//   return (
//     <>
//       <div className="mb-3 flex gap-3">
//         <Button onClick={() => handleOpen("xs")} variant="gradient">
//           Open Dialog XS
//         </Button>
//         <Button onClick={() => handleOpen("sm")} variant="gradient">
//           Open Dialog SM
//         </Button>
//         <Button onClick={() => handleOpen("md")} variant="gradient">
//           Open Dialog MD
//         </Button>
//       </div>
//       <div className="flex gap-3">
//         <Button onClick={() => handleOpen("lg")} variant="gradient">
//           Open Dialog LG
//         </Button>
//         <Button onClick={() => handleOpen("xl")} variant="gradient">
//           Open Dialog XL
//         </Button>
//         <Button onClick={() => handleOpen("xxl")} variant="gradient">
//           Open Dialog XXL
//         </Button>
//       </div>
//       <Dialog
//         open={
//           size === "xs" ||
//           size === "sm" ||
//           size === "md" ||
//           size === "lg" ||
//           size === "xl" ||
//           size === "xxl"
//         }
//         size={size || "md"}
//         handler={handleOpen}
//       >
//         <DialogHeader>Its a simple dialog.</DialogHeader>
//         <DialogBody>
//           The key to more success is to have a lot of pillows. Put it this way,
//           it took me twenty five years to get these plants, twenty five years of
//           blood sweat and tears, and I&apos;m never giving up, I&apos;m just
//           getting started. I&apos;m up to something. Fan luv.
//         </DialogBody>
//         <DialogFooter>
//           <Button
//             variant="text"
//             color="red"
//             onClick={() => handleOpen(null)}
//             className="mr-1"
//           >
//             <span>Cancel</span>
//           </Button>
//           <Button
//             variant="gradient"
//             color="green"
//             onClick={() => handleOpen(null)}
//           >
//             <span>Confirm</span>
//           </Button>
//         </DialogFooter>
//       </Dialog>
//     </>
//   );
// }

// const Modal = ({ showModal, submittedData, onClose }) => {
//   if (!showModal) {
//     return null;
//   }

//   return (
//     <div className={`${style.modal} ${style.visible}`}>
//       <h2>Отправленные данные</h2>
//       <p>First Name: {submittedData.firstName}</p>
//       <p>Last Name: {submittedData.lastName}</p>
//       <p>Age: {submittedData.age}</p>
//       <p>Telephone: {submittedData.tel}</p>
//       <p>Email: {submittedData.email}</p>
//       <button onClick={onClose}>Закрыть</button>
//     </div>
//   );
  
// };

// export default Modal;
