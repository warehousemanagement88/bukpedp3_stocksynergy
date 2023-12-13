import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const deleteGudangA = async (IDHAPUS) => {
  const gudangaId = IDHAPUS;
  const authorizationToken = getCookie("Authorization");

  const isConfirmed = await Swal.fire({
    title: "Apakah Anda Ingin Menghapus Data Gudang A?",
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
      "https://asia-southeast2-warehousemanagement88.cloudfunctions.net/warehouse_gudanga?id=" +
      gudangaId;

    try {
      const response = await fetch(target_url, {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow",
      });

      if (response.ok) {
        await Swal.fire({
          icon: "success",
          title: "Berhasil Menghapus Data Gudang A",
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

window.deleteGudangA = deleteGudangA;
