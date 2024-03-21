import axios from "axios";
import { useState } from "react";
import { Layout } from "../../Layout/Layout";
import { Link } from "react-router-dom";

const GetApi = () => {
  const [result, setResult] = useState();
  const [error, setError] = useState("");
  const handleGetApi = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setResult(response.data);
      console.log(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <Layout>
        <button
          onClick={handleGetApi}
          className="bg-red-200 mt-5 p-2 rounded-md text-sm transition duration-200 ease-in-out"
        >
          GET API
        </button>

        <div className=" w-[60%] ml-52 h-fit flex justify-center text-xs p-2  ">
          {error && <p className="text-center"> {error}</p>}
          {result?.length > 0 && (
            <div className=" grid grid-cols-1 gap-4 items-center ">
              {result.slice(0, 10).map((item) => (
                <div
                  className="h-fit w-full gap-2   text-left capitalize p-3 font-medium "
                  key={item.id}
                >
                  {" "}
                  <div className="w-[90%] p-10 bg-slate-300 ">
                    <Link to={`/update/${item.id}`}>
                      <span>Name:</span>
                      <input
                        className="w-96 h-10 mb-2 border bg-gray-100"
                        type="text"
                        name="name"
                        value={item.title}
                      />
                      <br />
                      <span>email:</span>
                      <input
                        className="w-96 h-10 mb-2 border bg-gray-100"
                        type="text"
                        name="email"
                        value={item.id}
                      />
                      <br />
                      <span>Body:</span>
                      <input
                        className="w-96 h-10 mb-2 border bg-gray-100"
                        type="text"
                        name="body"
                        value={item.body}
                      />
                      <div>
                        <button className=" bg-blue-300 p-1 mt-2 mr-2">
                          Edit
                        </button>

                        <button className=" bg-red-300 p-1 mt-2">delete</button>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};
export default GetApi;
