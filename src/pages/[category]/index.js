import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Card from "../../component/card";

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!category) return;
    const url = `https://fakestoreapi.com/products/category/${category}`;
    const getProductsByCategory = async () => {
      try {
        const respose = await fetch(url);
        const data = await respose.json();

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProductsByCategory();
  }, [category]);

  console.log(products);

  return (
    <div>
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            category={product.category}
            text={product.description}
          />
        );
      })}
    </div>
  );
};

export default CategoryPage;
