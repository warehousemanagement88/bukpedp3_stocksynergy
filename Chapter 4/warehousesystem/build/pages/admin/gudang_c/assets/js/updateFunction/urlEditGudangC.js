const urlParams = new URLSearchParams(window.location.search);
const gudangcId = urlParams.get("gudangcId");

export const urlFetch =
  "https://asia-southeast2-warehousemanagement88.cloudfunctions.net/warehouse_gudangc?id=" +
  gudangcId;
