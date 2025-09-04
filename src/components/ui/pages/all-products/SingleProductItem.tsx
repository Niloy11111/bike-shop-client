import { Link } from "react-router-dom";

const SingleProductItem = ({ item }) => {
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
    <div className="border border-b2 rounded-xl hover:shadow-xl transition-all duration-500 p-3 relative">
      {inStock === false ? (
        <button className="bg-p1 w-[110px] h-[40px] rounded-l-full absolute right-0 text-white">
          <p className="font-semibold text-sm">Stock Out</p>
        </button>
      ) : (
        ""
      )}

      <img className="rounded-xl w-full h-[220px]" src={photoURL} alt="" />

      {/* <div className="flex justify-center  gap-5 my-2">
        <span className="px-4 py-2 bg-[#FF381112] rounded-full text-sm">
          {brand}
        </span>
        <span className="bg-[#FF381112] px-4 py-2  rounded-full text-sm">
          {category}
        </span>
        <span className="bg-[#FF381112] px-4 py-2  rounded-full text-sm">
          {model}
        </span>
      </div> */}

      <div className="border-t  mt-3 flex items-center  justify-between">
        <h1 className=" font-bold ">{name}</h1>
        <h1
          className="text-[12px]  flex justify-center mt-3  border rounded-full
        font-semibold px-3 py-0.5"
        >
          {category}
        </h1>
      </div>
      <p className=" text-lg font-semibold ">$ {price}*</p>
      <div className="flex items-center justify-between">
        <p className=" text-d2 font-semibold text-sm">
          {brand}, {model}{" "}
        </p>

        <Link to={`/details/${_id}`}>
          <button className=" cursor-pointer   mt-2 px-5 py-2.5 text-white bg-p1 rounded-sm hover:bg-p1/90     text-sm">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleProductItem;
