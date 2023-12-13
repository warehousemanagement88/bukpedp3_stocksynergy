import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const deleteGudangC = async (IDHAPUS) => {
  const gudangcId = IDHAPUS;
  const authorizationToken = getCookie("Authorization");

  const isConfirmed = await Swal.fire({
    title: "Apakah anda ingin menghapus data Gudang C?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya, Hapus!!!",
    cancelButtonText: "Batal",
  });

  if (isConfirmed.isConfirmed) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", authorizationToken);

    const target_url =
      "https://asia-southeast2-warehousemanagement88.cloudfunctions.net/warehouse_gudangc?id=" +
      gudangcId;

    try {
      const response = await fetch(target_url, {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow",
      });

      if (response.ok) {
        await Swal.fire({
          icon: "success",
          title: "Berhasil Hapus Data Gudang C",
          showConfirmButton: false,
          timer: 1500,
        });
        location.reload();
      } else {
        throw new Error("Request failed with status: " + response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
};

window.deleteGudangC = deleteGudangC;
