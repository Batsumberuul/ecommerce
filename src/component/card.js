const Card = (props) => {
  const { image, title, text, price, category } = props;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="h-[48px] overflow-hidden">{text}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">{price}</div>
        </div>
      </div>
    </div>
  );
};
export default Card;
