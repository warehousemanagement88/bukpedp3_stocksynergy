const urlParams = new URLSearchParams(window.location.search);
const gudangbId = urlParams.get("gudangbId");

export const urlPUT =
  "https://asia-southeast2-warehousemanagement88.cloudfunctions.net/warehouse_gudangb?id=" +
  gudangbId;

export const AmbilResponse = (result) => {
  if (result.status) {
    console.log(result); // menampilkan response API pada console
    Swal.fire({
      icon: "success",
      title: "Data berhasil diubah",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.href = "tables_GudangB.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "error",
      text: result.message,
    });
  }
};
