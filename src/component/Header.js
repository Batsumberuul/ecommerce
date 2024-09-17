import { useEffect, useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const url = `https://fakestoreapi.com/products/categories`;
    const getCategories = async () => {
      const respose = await fetch(url);
      const categoriesData = await respose.json();
      setCategories(categoriesData);
    };

    getCategories();
  }, []);

  return (
    <div className="navbar bg-base-100">
      <Link href="/" className="btn btn-ghost text-xl">
        Store
      </Link>
      {categories.map((category, index) => (
        <Link
          href={`/${category}`}
          key={index}
          className="btn btn-ghost text-xl"
        >
          {category}
        </Link>
      ))}
    </div>
  );
};
