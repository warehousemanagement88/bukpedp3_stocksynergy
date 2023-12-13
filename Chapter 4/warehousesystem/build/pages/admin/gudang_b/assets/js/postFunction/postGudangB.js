import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const PostGudangB = () => {
  const target_url =
    "https://asia-southeast2-warehousemanagement88.cloudfunctions.net/warehouse_gudangb";
  const tokenvalue = getCookie("Authorization");
  const tokenkey = "Authorization";
  const datainjson = {
    brand: getValue("brand"),
    name: getValue("name"),
    category: getValue("category"),
    qty: getValue("qty"),
    sku: getValue("sku"),
    sellingprice: getValue("sellingprice"),
    originalprice: getValue("originalprice"),
    availability: getValue("availability"),
    color: getValue("color"),
    breadcrumbs: getValue("breadcrumbs"),
  };
  postWithToken(target_url, tokenkey, tokenvalue, datainjson, responseData);
  console.log(datainjson);
};

const responseData = (result) => {
  if (result.status) {
    Swal.fire({
      icon: "success",
      title: "Insert Successful",
      text: "Berhasil Insert Gudang B",
    }).then(() => {
      window.location.reload();
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Insert Failed",
      text: result.message,
    });
  }
};

window.PostGudangB = PostGudangB;
