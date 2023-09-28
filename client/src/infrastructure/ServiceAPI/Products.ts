export const fetchProducts = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_ROOT}/api/v1/products`,
  );
  const json = await response.json();
  return json.data.products;
};

export const createProduct = async (title: string, description: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_ROOT}/api/v1/products`,
    {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const json = await response.json();
  return json.data.product;
};
