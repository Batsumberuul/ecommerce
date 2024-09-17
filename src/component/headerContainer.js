// import { useEffect, useState } from "react";
// import Header from "./header";

// const HeaderContainer = () => {
//   const [categoryName, setCategoryName] = useState([]);
//   useEffect(() => {
//     const url = `https://fakestoreapi.com/products/categories`;
//     const ecommerceCategory = async () => {
//       const respose = await fetch(url);
//       const category = await respose.json();
//       console.log(category);
//       setCategoryName(category);
//     };

//     ecommerceCategory();
//   }, []);
//   console.log(categoryName);

//   return (
//     <div className="flex gap-4">
//       <p>Store</p>

//       {categoryName.map((categorytype, index) => {
//         return <Header key={index} category={categorytype} />;
//       })}
//     </div>
//   );
// };
// export default HeaderContainer;
