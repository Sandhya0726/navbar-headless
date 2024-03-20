import axios from "axios";
import { Layout } from "../../Layout/Layout";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Clothes = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(" https://api.escuelajs.co/api/v1/products").then((response) => {
      console.log(response.data);
      setImages(response.data);
    });
  }, []);

  return (
    <Layout>
      <div>
        Product- Clothes
        {images && (
          <div className="h-fit w-[80%] ml-[10%] text-xs  flex flex-wrap justify-center gap-10 p-10 place-self-center ">
            {images.slice(0, 10).map((item) => (
              <Link key={item.id} to={`/categories/${item.id}`}>
                <div className="flex w-60 h-fit flex-wrap flex-col justify-center bg-gray-200 rounded-md  text-sm font text-wrap font-medium hover:shadow-lg  shadow-slate-500  ease-in-out transition duration-100">
                  <div>
                    <img
                      src={item.images}
                      alt={item.title}
                      className="h-fit  rounded-md "
                    />
                    {/* Rs {item.price} */}
                    <div className=" h-20 text-center mt-5">{item.title}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};
export default Clothes;
