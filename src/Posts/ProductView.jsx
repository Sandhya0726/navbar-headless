import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// import { axios } from "axios";

const ProductView = () => {
  const [productView, isProductView] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => {
        // console.log(response.data);
        isProductView(response.data);
      });
  }, []);
  console.log(productView);
  return (
    <div className="  flex  justify-center bg-gray-900   w-full h-full  items-center  ">
      <div className=" relative flex justify-center w-[90%] h-[80%] ">
        <div className="w-[41%] ">
          <img src={productView.images} alt={productView.title} className="" />
        </div>
        <div
          className="w-[30%]  flex flex-col justify-evenly bg-gray-300  text-gray-800 font-medium text-xl
      "
        >
          {productView?.title}
          <div className="text-left p-2 text-xl">
            {" "}
            Price:{productView.price}
          </div>
          <div className="text-left p-2 text-xl"> Add To Cart</div>

          <div className="text-left px-2 py-1 text-xs border-t-2">
            {" "}
            {productView.description}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductView;
