const urlParams = new URLSearchParams(window.location.search);
const staffId = urlParams.get("staffId");

export const urlFetch =
  "https://asia-southeast2-warehousemanagement88.cloudfunctions.net/warehouse_staff?id=" +
  staffId;
