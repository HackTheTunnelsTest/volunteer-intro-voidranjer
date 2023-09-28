import { useEffect, useState } from "react";
import { ProductPreviewCard } from "../../components";
import { ServiceAPI } from "../../infrastructure";
import "./Home.style.scss";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const test = ServiceAPI.createProduct("Hi", "Yes");
    const fetchData = async () => {
      const products = await ServiceAPI.fetchProducts();
      setProducts(products);
    };

    fetchData();
  }, []);

  return (
    <div className="home-page">
      <h1 className="home-page__title">Hello World!</h1>
      <h2>Products:</h2>
      <div className="home-page__products">
        {products.map((product) => (
          <ProductPreviewCard
            title={product.title}
            description={product.description}
            key={`${product.id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
