// import { Select } from "antd";
import { BadgePlus, CircleCheck, Minus, Plus, Search } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiCategory } from "react-icons/bi";
import { categories, priceLists } from "../../../../constants/global";
import { useGetAllProductsQuery } from "../../../../redux/features/admin/productManagement.api";
import {
  selectGlobalParams,
  setGlobalParams,
} from "../../../../redux/features/auth/globalSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { TQueryParam } from "../../../../types";
import { Button } from "../../../reusable/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../select";
import SingleProductItems from "./SingleProductItem";

const AllItems = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useAppDispatch();
  const globalParams = useAppSelector(selectGlobalParams);
  const searchedData = {};

  const {
    data: bikeData,
    isLoading,
    isFetching,
  } = useGetAllProductsQuery(globalParams);

  // console.log("params here", globalParams);

  // console.log("search", bikeData);

  const onSubmit = async (data) => {
    if (data.searchTerm) {
      // setParams([
      //   ...(params?.filter((p) => p.name !== "searchTerm") || []),
      //   { name: "searchTerm", value: data.searchTerm },
      // ]);

      dispatch(
        setGlobalParams([
          ...(params?.filter((p) => p.name !== "searchTerm") || []),
          { name: "searchTerm", value: data.searchTerm },
        ])
      );
    }
    reset();
  };

  const models = bikeData?.data?.map((item) => item.model);

  const modelOptions = [...new Set(models)]?.map((item) => ({
    value: item,
    label: item,
  }));
  const brands = bikeData?.data?.map((item) => item.brand);

  const brandOptions = [...new Set(brands)]?.map((item) => ({
    value: item,
    label: item,
  }));

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    // setParams([
    //   ...(params?.filter((p) => p.name !== "searchTerm") || []),
    //   { name: "searchTerm", value: value },
    // ]);
    dispatch(
      setGlobalParams([
        ...(params?.filter((p) => p.name !== value) || []),
        { name: "brand", value: value },
      ])
    );
  };
  const handleFilterByModel = (value: string) => {
    console.log(`selected ${value}`);
    // setParams([
    //   ...(params?.filter((p) => p.name !== "searchTerm") || []),
    //   { name: "searchTerm", value: value },
    // ]);
    dispatch(
      setGlobalParams([
        ...(params?.filter((p) => p.name !== value) || []),
        { name: "searchTerm", value: value },
      ])
    );
  };

  const isPriceRangeSelected = (minPrice: number, maxPrice: number) => {
    const currentMin = globalParams?.find((p) => p.name === "minPrice")?.value;
    const currentMax = globalParams?.find((p) => p.name === "maxPrice")?.value;
    return currentMin === minPrice && currentMax === maxPrice;
  };

  const isCategorySelected = (categoryValue: string) => {
    const currentCategory = globalParams?.find(
      (p) => p.name === "category"
    )?.value;
    return currentCategory === categoryValue;
  };
  return (
    <div className={`mt-10  customWidth`}>
      <div
        onClick={() => setOpenFilter(!openFilter)}
        className="my-5 cursor-pointer"
      >
        <h1 className="flex  items-center justify-between  lg:hidden bg-[#1a1a1a] text-white p-4">
          SHOW FILTER {openFilter ? <Minus /> : <Plus />}
        </h1>
      </div>
      <h1 className="text-3xl smHidden font-bold "> Explore More Products</h1>
      <p className="text-d1 mt-5 mb-8">
        Discover premium bikes and accessories with ease. Find top brands, best
        deals, and ride in style.
      </p>
      <div className="flex lg:flex-row flex-col gap-10 mb-20">
        <div
          className={`${
            openFilter
              ? "lg:w-[300px] lg:block"
              : "hidden lg:w-[400px] lg:block"
          } lg:w-[300px]`}
        >
          {/* Search input */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="" action="">
              <div className="mb-5  w-full   rounded-lg ">
                <div className="border-2 border-white focus-within:border-2 focus-within:border-p1 rounded-lg p-[1px]">
                  <div className="pl-2 rounded-md flex items-center border border-[#D9D9D9]  ">
                    <Search className="mr-2 w-[20px] " />
                    <input
                      {...register("searchTerm", { required: true })}
                      name="searchTerm"
                      onChange={(e) =>
                        // setParams([
                        //   ...(params?.filter((p) => p.name !== "searchTerm") || []),
                        //   { name: "searchTerm", value: e.target.value },
                        // ])

                        dispatch(
                          setGlobalParams([
                            ...(params?.filter(
                              (p) => p.name !== "searchTerm"
                            ) || []),
                            { name: "searchTerm", value: e.target.value },
                          ])
                        )
                      }
                      id="field-id"
                      className=" text-sm font-semibold w-full h-[40px] outline-none "
                      type="text"
                      placeholder="Find Bike"
                      tabIndex={0}
                    />
                  </div>
                </div>

                <Button className="w-full mt-2 bg-p1">Search</Button>
              </div>
            </form>
          </div>

          {/* categories */}

          <div className="border mt-4 border-b3 p-4 rounded-lg">
            <div
              className=" flex items-center gap-2
           font-semibold mb-1"
            >
              <BiCategory />
              Categories
            </div>

            <div className="">
              {categories.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 p-2 rounded-lg hover:bg-lowWhite text-sm cursor-pointer transition-all duration-300 hover:text-p1 ${
                    isCategorySelected(item) ? "text-p1 bg-lowWhite" : ""
                  }`}
                  onClick={() =>
                    // setParams([
                    //   ...(params?.filter((p) => p.name !== "searchTerm") || []),
                    //   { name: "searchTerm", value: item },
                    // ])
                    dispatch(
                      setGlobalParams([
                        ...(params?.filter((p) => p.name !== "searchTerm") ||
                          []),
                        { name: "searchTerm", value: item },
                      ])
                    )
                  }
                >
                  <CircleCheck className="w-[15px]" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Price range */}
          <div className="mt-5 border  border-b3 p-4 rounded-lg">
            <div
              className=" flex items-center gap-2
           font-semibold"
            >
              {/* <DollarSign className="w-[20px]" /> */}
              Shop by price
            </div>

            <div className="mt-1">
              {priceLists.map(({ minPrice, maxPrice }, index) => (
                <div
                  key={index}
                  onClick={() =>
                    // setParams([
                    //   ...(params?.filter(
                    //     (p) => p.name !== "minPrice" && p.name !== "maxPrice"
                    //   ) || []),
                    //   { name: "minPrice", value: minPrice },
                    //   { name: "maxPrice", value: maxPrice },
                    // ])

                    dispatch(
                      setGlobalParams([
                        ...(params?.filter(
                          (p) => p.name !== "minPrice" && p.name !== "maxPrice"
                        ) || []),
                        { name: "minPrice", value: minPrice },
                        { name: "maxPrice", value: maxPrice },
                      ])
                    )
                  }
                  className={`flex items-center gap-2 p-2 rounded-lg hover:bg-lowWhite  text-sm cursor-pointer transition-all duration-300 ${
                    isPriceRangeSelected(minPrice, maxPrice)
                      ? "text-p1 bg-lowWhite"
                      : "hover:text-p1"
                  }  `}
                >
                  <BadgePlus className="w-[15px]" />

                  <p>
                    ${minPrice}.00 - ${maxPrice}.00
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Model */}
          <div className="mt-5 border-2 border-white focus-within:border-p1 focus-within:border-2 rounded-lg p-[1px] ">
            <Select defaultValue="" onValueChange={handleFilterByModel}>
              <SelectTrigger className="rounded-md w-full  focus-visible:ring-0 focus-visible:ring-offset-0  focus:border-b3 focus:outline-none">
                <SelectValue placeholder="Filter By Models" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem
                  className="font-Inter text-sm   !important"
                  value="any"
                >
                  Select Any Model
                </SelectItem>
                {modelOptions?.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="font-Inter text-sm  !important"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Brands */}
          <div className="mt-2 border-2 border-white focus-within:border-p1 focus-within:border-2 rounded-lg p-[1px]">
            <Select defaultValue="" onValueChange={handleFilterByModel}>
              <SelectTrigger className="rounded-md w-full  focus-visible:ring-0 focus-visible:ring-offset-0  focus:border-b3 focus:outline-none">
                <SelectValue placeholder="Filter By Brands" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem
                  className="font-Inter text-sm  !important"
                  value="any"
                >
                  Select Any Brand
                </SelectItem>
                {brandOptions?.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="font-Inter text-sm  !important"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Model */}
          {/* <div className="rounded text-sm mt-5 border-2 border-b1  py-2 px-2 uppercase font-semibold mb-2">
            Model
          </div>

          <Select
            defaultValue="Filter By Models"
            style={{ width: "100%" }}
            size="large"
            onChange={handleFilterByModel}
            options={modelOptions}
          /> */}
          {/* <div className="rounded text-sm mt-5 border-2 border-b1  py-2 px-2 uppercase font-semibold mb-2">
            Brand
          </div>

          <Select
            defaultValue="Filter By Brands"
            style={{ width: "100%" }}
            size="large"
            onChange={handleChange}
            options={brandOptions}
          /> */}
        </div>

        <div>
          {isLoading || isFetching || !bikeData?.data ? (
            <div className="loader ml-40 ">Loading...</div>
          ) : (
            <div className="mb-20 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
              {bikeData?.data?.map((item) => (
                <SingleProductItems
                  item={item}
                  key={item._id}
                ></SingleProductItems>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllItems;
