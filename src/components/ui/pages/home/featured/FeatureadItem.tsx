import { Link } from "react-router-dom";

const FeatureadItem = ({ item }) => {
  const {
    brand,
    category,
    createdAt,
    description,
    inStock,
    model,
    name,
    photoURL,
    price,
    quantity,
    updatedAt,
    _id,
  } = item;

  return (
    <Link to={`/details/${_id}`}>
      <div className="border border-[#D9D9D9] rounded-xl p-4">
        <img className="rounded-xl w-full h-[220px]" src={photoURL} alt="" />

        <div className="flex justify-center  gap-5 my-2">
          <span className="sm:px-3 sm:py-1.5 px-4 py-2  2sm:px-4 2sm:py-2 bg-[#e1f3e1] rounded-full text-[12px]">
            {brand}
          </span>
          <span className="bg-[#e1f3e1] sm:px-3 px-4 py-2 sm:py-1.5 2sm:px-4 2sm:py-2  rounded-full text-[12px]">
            {category}
          </span>
          <span className="bg-[#e1f3e1] sm:px-3 px-4 py-2 sm:py-1.5 2sm:px-4 2sm:py-2 rounded-full text-[12px]">
            {model}
          </span>
        </div>

        <h1 className="mt-3 text-[25px] font-bold text-center">{name}</h1>
        <p className="text-p1 text-[20px] font-semibold text-center">
          ${price}
        </p>
      </div>
    </Link>
  );
};

export default FeatureadItem;
