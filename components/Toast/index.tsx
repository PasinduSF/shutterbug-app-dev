import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Zoom } from "react-toastify";

function Toast() {
  return (
    <ToastContainer
      position="top-center"
      theme="colored"
      autoClose={3000}
      hideProgressBar
      closeOnClick
      pauseOnFocusLoss
      pauseOnHover
      transition={Zoom}
      style={{ width: "30%"}}
    />
  );
}

export default Toast;
