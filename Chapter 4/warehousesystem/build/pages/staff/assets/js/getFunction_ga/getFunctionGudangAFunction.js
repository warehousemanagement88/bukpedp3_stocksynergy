import { URLGetGudangA, responseData } from "./getFunctionGudangA.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const get = (target_url, responseFunction) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => responseFunction(JSON.parse(result)))
    .catch((error) => {
      console.log("error", error);
    });
};

get(URLGetGudangA, responseData);
