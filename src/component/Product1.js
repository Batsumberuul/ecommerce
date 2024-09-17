import Link from "next/link";

const ProductCard = (props) => {
  const { image, title, text, buttonText } = props;
  return (
    <Link href={"./category/productId"}>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{text}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add card</button>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
