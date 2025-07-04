import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../../../../redux/features/admin/productManagement.api";
import FeatureadItem from "./FeatureadItem";

const Featured = () => {
  const { data: bikeData, isLoading, isFetching } = useGetAllProductsQuery([]);

  return (
    <div className="customWidth">
      <p className="text-center text-p1 font-bold lg:mt-0 mt-5">
        Popular Products
      </p>
      <h1 className="font-bold text-center my-5 leading-[40px] text-[35px] lg:text-[45px]">
        Browse Our Products
      </h1>

      <p className=" capitalize text-center text-[#737373] mb-[50px]">
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br className="lg:block hidden" /> words which don't look
        even slightly believable.{" "}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6">
        {bikeData?.data?.slice(0, 6).map((item) => (
          <FeatureadItem item={item} key={item._id}></FeatureadItem>
        ))}
      </div>

      <Link to="/all-products">
        <button className="hover:bg-p1 hover:text-white transition-all duration-200 mx-auto cursor-pointer mb-20 mt-[50px] text-[18px] font-Inter font-semibold rounded border border-p1 w-[170px] h-[56px] flex items-center justify-center text-p1">
          More Products
        </button>
      </Link>
    </div>
  );
};

export default Featured;
