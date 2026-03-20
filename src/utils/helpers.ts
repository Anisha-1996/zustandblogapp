import Swal from "sweetalert2";

export const formatDate = (date: string) => {
  return new Date(date).toLocaleString();
};

export const showToast = (
  message: string,
  type: "success" | "error" = "success"
) => {
  Swal.fire({
    toast: true,
    position: "top-end",
    icon: type,
    title: message,
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });
};