import { getValue } from "https://jscroot.github.io/element/croot.js";

function postSignUpStaff(target_url, datajson, responseFunction) {
  var raw = JSON.stringify(datajson);

  var requestOptions = {
    method: "POST",
    body: raw,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => responseFunction(JSON.parse(result)))
    .catch((error) => console.log("error", error));
}

const SignUpStaff = () => {
  const target_url =
    "https://asia-southeast2-warehousemanagement88.cloudfunctions.net/warehouse_signup";

  const datainjson = {
    namalengkap: getValue("namalengkap"),
    jabatan: getValue("jabatan"), // Assuming there's a field for staff position
    jeniskelamin: getValue("jeniskelamin"),
    akun: {
      email: getValue("email"),
      password: getValue("password"),
      confirmpass: getValue("confirmpass"),
    },
  };

  console.log(datainjson);
  postSignUpStaff(target_url, datainjson, responseData);
};

const responseData = (result) => {
  if (result.status) {
    Swal.fire({
      icon: "success",
      title: "Create Account Successful",
      text: result.message,
    }).then(() => {
      window.location.href = "../admin/dashboard.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Create Account Failed",
      text: result.message,
    });
  }
};

window.SignUpStaff = SignUpStaff;
