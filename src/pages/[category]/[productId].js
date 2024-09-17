import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

import ProductCard from "@/component/Product1";

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const router = useRouter();
  const productId = router.query.productId;

  useEffect(() => {
    const url = `https://fakestoreapi.com/products/${productId}`;

    const getAllProduct = async () => {
      const respose = await fetch(url);
      const data = await respose.json();
      setProduct(data);
    };

    getAllProduct();
  }, []);

  console.log(product);

  return (
    <div>
      <ProductCard
        image={product.image}
        title={product.title}
        text={product.description}
      />
      ;
    </div>
  );
};
export default ProductPage;
