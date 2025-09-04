import {
  selectGlobalParams,
  setGlobalParams,
} from "@/redux/features/auth/globalSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { slides } from "../../../constants/global";
import { useGetAllProductsQuery } from "../../../redux/features/admin/productManagement.api";
import { TQueryParam, TSlides } from "../../../types";
import gear from "/public/assets/gear.png";
import logoColor from "/public/assets/logo-color.png";
interface BannerSliderProps {
  slides: TSlides;
}
const Banner = () => {
  const dispatch = useAppDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const globalParams = useAppSelector(selectGlobalParams);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides?.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides?.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const {
    data: bikeData,
    isLoading,
    isFetching,
  } = useGetAllProductsQuery(globalParams);

  // console.log("params here", params);

  console.log("bikeData", bikeData);
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <section className="mb-20">
      {/* lg:h-[680px] */}
      <div className=" relative ">
        <div
          className="bg-gray-800 hover:bg-gray-800/80 bg-blend-overlay transition-all duration-300 p-2 rounded-full absolute top-[50%] translate-x-[0%]
        
        translate-y-[-50%]  left-8 cursor-pointer z-10"
          onClick={goToPrevious}
        >
          {" "}
          <ChevronLeft className="text-white" />
        </div>
        <div
          className=" bg-gray-800 hover:bg-gray-800/80 transition-all duration-300 p-2 rounded-full absolute top-[50%] translate-x-[0%]
        
        translate-y-[-50%] right-8 cursor-pointer z-10"
          onClick={goToNext}
        >
          <ChevronRight className="text-white" />
        </div>
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex].url}`,
          }}
          className=" w-full h-full bg-cover
         bg-no-repeat   bg-[center_30%] mb-6
          "
        >
          <div
            style={{
              backgroundImage: `url(${slides[currentIndex].url})`,
            }}
            className="w-full h-[70vh] bg-no-repeat bg-cover bg-blend-overlay bg-[#444]  bg-[center_30%] mb-6 flex items-center justify-start"
          >
            <div className="text-white customWidth   mt-20 ">
              <div className="inline-block bg-gray-800 bg-opacity-70 px-3  py-1 rounded-full text-[12px] font-medium mb-4">
                {slides[currentIndex].pinPoint}
              </div>

              <h1 className="text-4xl leading-[63px] max-w-[680px] 2sm:text-6xl font-bold  mb-6">
                {slides[currentIndex].title}
              </h1>

              <p className="text-lg lg:text-xl max-w-[720px] text-gray-200 mb-8 leading-relaxed">
                {slides[currentIndex].description}
              </p>

              <div className="flex gap-4">
                <Link to={`/all-products`}>
                  <button
                    onClick={() =>
                      // setParams([
                      //   ...(params?.filter((p) => p.name !== "searchTerm") || []),
                      //   { name: "searchTerm", value: item },
                      // ])
                      dispatch(
                        setGlobalParams([
                          ...(params?.filter((p) => p.name !== "searchTerm") ||
                            []),
                          {
                            name: "searchTerm",
                            value: slides[currentIndex].filterBtn,
                          },
                        ])
                      )
                    }
                    className="  px-6 py-2.5 rounded font-semibold bg-white  cursor-pointer text-black text-sm transition-colors"
                  >
                    Shop {slides[currentIndex].filterBtn}
                  </button>
                </Link>
                <Link to={`/all-products`}>
                  <button className="  px-6 py-2 rounded font-semibold border-2 border-white hover:bg-white text-white   cursor-pointer hover:text-black text-sm transition-colors">
                    Browse All Products
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex customWidth    items-center justify-between">
          <div className="lg:flex  hidden cursor-pointer  gap-2  ">
            {slides.map((slide, slideIndex) => (
              <div
                className=""
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
              >
                <img
                  className="rounded  w-[80px] h-[55px]"
                  src={slide.url}
                ></img>
              </div>
            ))}
          </div>

          <div className=" flex justify-between items-start gap-3">
            <div className="bg-[#dcfce7] rounded-sm p-2">
              <img className="w-[30px] " src={gear} alt="sdf" />
            </div>
            <div>
              <h1 className="font-semibold ">
                {" "}
                {slides[currentIndex].primaryCardTitle}
              </h1>
              <p className="w-[350px] text-sm font-medium text-d1">
                {" "}
                {slides[currentIndex].primaryCardDescription}
              </p>
            </div>
          </div>
          <div className=" flex items-start gap-3">
            <div className="bg-[#dcfce7] rounded-sm p-2">
              <img className="w-[30px] " src={logoColor} alt="sdf" />
            </div>
            <div>
              <h1 className="font-semibold ">
                {" "}
                {slides[currentIndex].secondaryCardTitle}
              </h1>
              <p className="w-[350px] text-sm font-medium text-d1">
                {" "}
                {slides[currentIndex].secondaryCardDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
