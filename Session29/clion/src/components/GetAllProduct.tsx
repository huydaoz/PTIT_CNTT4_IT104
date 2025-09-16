import { useEffect, useState } from "react";

function ProductList() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function GetAllProducts() {
      try {
        const res = await fetch("http://localhost:8000/product");
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log("Lỗi", error);
      }
    }
    GetAllProducts();
  }, []);
  console.log(product);
  return <div></div>;
}

export default ProductList;
