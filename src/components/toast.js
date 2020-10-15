import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Toast = ({ successMessage }: any) => {
  return (
    <div>
      {toast.success(successMessage, {
        position: toast.POSITION.TOP_CENTER,
        style: { backgroundColor: "#4C995B" },
      })}
    </div>
  );
};

export default Toast;
