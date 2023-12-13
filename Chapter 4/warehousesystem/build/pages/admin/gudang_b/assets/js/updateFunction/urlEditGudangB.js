const urlParams = new URLSearchParams(window.location.search);
const gudangbId = urlParams.get("gudangbId");

export const urlFetch =
  "https://asia-southeast2-warehousemanagement88.cloudfunctions.net/warehouse_gudangb?id=" +
  gudangbId;
