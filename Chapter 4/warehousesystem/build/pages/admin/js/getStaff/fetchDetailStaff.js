import { urlFetch } from "./urlDetailStaff.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { responseDataStaff } from "./detailStaff.js";

function get(target_url) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      const parsedResult = JSON.parse(result);

      // Periksa peran berdasarkan hierarki objek

      // Pilih fungsi respons berdasarkan peran

      responseDataStaff(parsedResult);
    })
    .catch((error) => {
      console.log("error", error);
    });
}

// Contoh pemanggilan metode get
get(urlFetch);
