import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import brandOne from "/public/assets/footer-card-1.png";
import brandTwo from "/public/assets/footer-card-2.png";
import brandThree from "/public/assets/footer-card-3.png";
import brandFour from "/public/assets/footer-card-4.png";
import brandFive from "/public/assets/footer-card-5.png";
import brandSix from "/public/assets/footer-card-6.png";
import logoWhite from "/public/assets/logo-white.png";

const Footer = () => {
  return (
    <footer className=" bg-gray-900 text-white py-14 lg:py-20 h-[60vh] flex items-center justify-center  font-Inter ">
      <section>
        <div className="customWidth flex gap-10 lg:gap-0 lg:flex-row flex-col-reverse  justify-between ">
          <div>
            <div className="flex items-center gap-2 mb-10">
              <img className="w-[50px] lg:w-[50px]" src={logoWhite}></img>
              <div>
                <h2 className="text-xl   font-bold font-Inter">Bike Bari</h2>
                <p className="text-[12px] -mt-1 ">Showroom</p>
              </div>
            </div>

            <h2 className="font-Inter font-bold mb-2 ">Connect us on</h2>
            <ul className="flex gap-8 ">
              <a href="https:/facebook.com">
                {" "}
                <FaFacebook className="text-3xl"></FaFacebook>{" "}
              </a>
              <a href="https:/instagram.com">
                {" "}
                <FaInstagramSquare className="text-3xl"></FaInstagramSquare>{" "}
              </a>
              <a href="https:/twitter.com">
                {" "}
                <FaTwitterSquare className="text-3xl"></FaTwitterSquare>{" "}
              </a>
              <a href="https:/linkedin.com">
                {" "}
                <FaLinkedin className="text-3xl"></FaLinkedin>{" "}
              </a>
              <a href="https:/youtube.com">
                {" "}
                <FaYoutube className="text-3xl"></FaYoutube>{" "}
              </a>
            </ul>
            <ul className="flex flex-col gap-1 mt-7 ">
              <p className=" flex items-center gap-2   ">
                <Phone className="w-[16px]" />{" "}
                <span className="text-footerGray">+9 (681) 843-4596</span>
              </p>
              <p className=" 3xs:flex items-center gap-2 hidden ">
                <Mail className="w-[16px]" />{" "}
                <span className="text-footerGray">info@bikebari.com</span>
              </p>
              <p className=" 3xs:flex items-center gap-2 hidden ">
                <MapPin className="w-[16px]" />{" "}
                <span className="text-footerGray">
                  123 Bike Bari, Dublin, Ireland
                </span>
              </p>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-3 ">About Bike Bari</h2>
            <ul className="text-footerGray space-y-2">
              <li className="">About Us</li>
              <li className="">Our Story</li>
              <li className="">Contact Us</li>
              <li className="">Privacy Policy</li>
              <li className="">Terms of Service</li>
              <li className="">Shipping Info</li>
              <li className="">Return Policy</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-3 ">Customer Service</h2>
            <ul className="text-footerGray space-y-2">
              <li className="">Help Center</li>
              <li className="">Track Order</li>
              <li className="">Size Guide</li>
              <li className="">Warranty</li>
              <li className="">Live Chat</li>
              <li className="">Bike Assembly</li>
              <li className="">Maintenance Tips</li>
              <li className="">Returns & Exchanges</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-3 ">Popular Bikes</h2>
            <ul className="text-footerGray space-y-2">
              <li className="">Mountain Bikes</li>
              <li className="">Road Bikes</li>
              <li className="">Electric Bikes</li>
              <li className="">Kids Bikes</li>
              <li className="">Hybrid Bikes</li>
              <li className="">Bike Accessories</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-xl">Subscribe</h2>
            <p className="my-4 text-footerGray">
              Stay informed about new bike arrivals, exclusive deals <br /> and
              exciting offers.
            </p>
            <div>
              <input
                className="border-2 focus:border-p1 outline-none text-d2 bg-white py-2.5 pl-3  w-full  rounded-full"
                placeholder="Enter email adress"
                type="email"
                name=""
                id=""
              />

              <button
                className="cursor-pointer hover:bg-p1 hover:text-white bg-white text-p1 w-full py-2.5 
            transition-allfont-Inter font-semibold duration-300  rounded-full mt-3 flex items-center gap-2 justify-center"
              >
                Subscribe <FaArrowRight className="text-lg" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-16 border-t border-[#444] pt-7">
          <div>
            <p>Copyright © 2025 Bike Bari, Inc. All Rights Reserved</p>
          </div>

          <div className="flex items-center gap-3 ">
            <img src={brandOne} alt="" />
            <img src={brandTwo} alt="" />
            <img src={brandThree} alt="" />
            <img src={brandFour} alt="" />
            <img src={brandFive} alt="" />
            <img src={brandSix} alt="" />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
