export const isiData = (results) => {
  const inputMapping = [
    { id: "brand", path: "brand" },
    { id: "name", path: "name" },
    { id: "category", path: "category" },
    { id: "qty", path: "qty" },
    { id: "sku", path: "sku" },
    { id: "sellingprice", path: "sellingprice" },
    { id: "originalprice", path: "originalprice" },
    { id: "availability", path: "availability" },
    { id: "color", path: "color" },
    { id: "breadcrumbs", path: "breadcrumbs" },
  ];

  inputMapping.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    inputElement.value = value;
  });
};

const getNestedValue = (obj, path, index, property) => {
  const value = path
    .split(".")
    .reduce((value, key) => (value && value[key] ? value[key] : ""), obj);

  if (
    Array.isArray(value) &&
    value.length > index &&
    value[index].hasOwnProperty(property)
  ) {
    return value[index][property];
  }

  return value;
};
