import Card from "./card";
import { useEffect, useState } from "react";
import Link from "next/link";

const AllCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `https://fakestoreapi.com/products`;
    const getAllProducts = async () => {
      const respose = await fetch(url);
      const data = await respose.json();
      setProducts(data);
    };

    getAllProducts();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 ">
      {products.map((card) => {
        return (
          <Link href={`category/${card.id}`}>
            <Card
              key={card.id}
              image={card.image}
              title={card.title}
              price={card.price}
              category={card.category}
              text={card.description}
            />
          </Link>
        );
      })}
    </div>
  );
};
export default AllCard;
