import { URLGetStaff, responseData } from "./getFunctionStaff.js";
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
    .then((response) => response.json()) // Parse the response as JSON
    .then((result) => responseFunction(result))
    .catch((error) => {
      console.log("error", error);
    });
};

get(URLGetStaff, responseData);
