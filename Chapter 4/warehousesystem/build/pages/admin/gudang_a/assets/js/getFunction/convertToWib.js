export function convertToWIB(utcTimeString) {
  const utcDate = new Date(utcTimeString);
  const wibDate = new Date(
    utcDate.toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
  );

  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  let dateStr = wibDate.toLocaleString("id-ID", options);
  dateStr = dateStr.replace(",", "");
  return dateStr;
}
