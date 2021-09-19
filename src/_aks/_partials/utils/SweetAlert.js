//import React from "react";
import Swal from "";

export default function SweetAlert({
  title,
  text,
  icon,
  confirmButtonText,
  cancelButtonText,
}) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    buttonsStyling: false,
    confirmButtonText: "<i class='la la-headphones'></i> " + confirmButtonText,
    showCancelButton: true,
    cancelButtonText: "<i class='la la-thumbs-down'></i>" + cancelButtonText,
    customClass: {
      confirmButton: "btn btn-danger",
      cancelButton: "btn btn-default",
    },
  });
}

export function SweetAlert2({ title, icon, text, confirmButtonText }) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    buttonsStyling: false,
    confirmButtonText: confirmButtonText,
    customClass: {
      confirmButton: "btn btn-primary",
    },
  });
}
