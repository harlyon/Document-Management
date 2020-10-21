import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Toast = ({ successMessage }) => {
  return (
    <div>
      {toast.success(successMessage, {
        position: toast.POSITION.TOP_CENTER,
        style: { backgroundColor: "#2443AC" },
      })}
    </div>
  );
};

export default Toast;
