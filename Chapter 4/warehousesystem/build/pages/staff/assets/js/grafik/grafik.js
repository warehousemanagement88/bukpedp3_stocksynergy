function show_chart(target_url, idChart, backgroundColor, warehouse_total) {
  fetch(target_url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      document.getElementById(warehouse_total).innerHTML = result.length;
      const temps = result;
      const ctx = document.getElementById(idChart);

      const products = temps.map((temp) => temp.name);
      const values = temps.map((temp) => temp.qty);
      console.log(values);
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: products,
          datasets: [
            {
              label: "Stock",
              data: values,
              borderWidth: 1,
              backgroundColor: backgroundColor,
            },
          ],
        },
        options: {
          indexAxis: "y",
        },
      });
    })
    .catch((error) => {
      console.log("error", error);
    });
}
show_chart(
  "https://asia-southeast2-warehousemanagement88.cloudfunctions.net/warehouse_gudanga",
  "myChart-a",
  "rgba(255, 99, 132, 0.2)",
  "total-gudanga"
);
show_chart(
  "https://asia-southeast2-warehousemanagement88.cloudfunctions.net/warehouse_gudangb",
  "myChart-b",
  "rgba(54, 162, 235, 0.2)",
  "total-gudangb"
);
show_chart(
  "https://asia-southeast2-warehousemanagement88.cloudfunctions.net/warehouse_gudangc",
  "myChart-c",
  "rgba(255, 206, 86, 0.2)",
  "total-gudangc"
);
