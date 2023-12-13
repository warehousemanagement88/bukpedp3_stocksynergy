import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const checkTokenAndRedirect = () => {
  // Mendapatkan nilai cookie dengan nama "token" menggunakan fungsi getCookie
  const token = getCookie("token");

  // Jika tidak ada token, kembalikan ke halaman sign-in.html
  if (!token) {
    Swal.fire({
      icon: "info",
      title: "Informasi",
      text: "Anda belum login. Silahkan login terlebih dahulu.",
      confirmButtonText: "OK",
    }).then(() => {
      // Redirect ke halaman sign in
      window.location.href = "../../sign-in.html";
    });
  }
};

document.addEventListener("DOMContentLoaded", checkTokenAndRedirect);
