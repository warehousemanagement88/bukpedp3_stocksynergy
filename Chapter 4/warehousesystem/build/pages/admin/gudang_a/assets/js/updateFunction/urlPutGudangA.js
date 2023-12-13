const urlParams = new URLSearchParams(window.location.search);
const gudangaId = urlParams.get("gudangaId");

export const urlPUT =
  "https://asia-southeast2-warehousemanagement88.cloudfunctions.net/warehouse_gudanga?id=" +
  gudangaId;

export const AmbilResponse = (result) => {
  if (result.status) {
    console.log(result); // menampilkan response API pada console
    Swal.fire({
      icon: "success",
      title: "Data berhasil diubah",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.href = "tables_GudangA.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "error",
      text: result.message,
    });
  }
};
