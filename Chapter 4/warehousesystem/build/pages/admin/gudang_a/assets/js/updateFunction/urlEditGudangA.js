const urlParams = new URLSearchParams(window.location.search);
const gudangaId = urlParams.get("gudangaId");

export const urlFetch =
  "https://asia-southeast2-warehousemanagement88.cloudfunctions.net/warehouse_gudanga?id=" +
  gudangaId;
