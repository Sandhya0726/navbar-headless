import axios from "axios";
import { useState } from "react";
import { Layout } from "../../Layout/Layout";

const GetApi = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const handleGetApi = async () => {
    // fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setResult(data);
    //   });
    // try {
    //   const response = await axios.get(
    //     "https://jsonplaceholder.typicode.com/cdjshdjhd/omments?postId="
    //   );
    //   setResult(response);
    // } catch (err) {
    //   console.log("hello", err);
    //   setError(err.message);
    //   console.log("hello");
    // }
    //   axios
    //     .get("https://jsonplaceholder.typicode.com/comments?postId=1")
    //     .then((response) => {
    //       console.log(response.data);
    //       setResult(response.data);
    //     })
    //     .catch((err) => {
    //       console.log(err.message);
    //       setError(err.message);
    //     });
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments?postId=1"
      );
      setResult(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handlePatch = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Twilight",
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  const handleDelete = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        console.log("Deleted successfully");
      } else {
        console.log("Deleting is not successful");
      }
    });
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
        {/* <button
          className="ml-5 bg-green-200 p-2 rounded-md text-sm"
          onClick={handlePatch}
        >
          PATCH
        </button>
        <button
          className="ml-5 bg-blue-200 p-2 rounded md text-sm"
          onClick={handleDelete}
        >
          DELETE
        </button> */}
        <div className=" w-[60%] ml-52 h-fit flex justify-center text-xs p-2  ">
          {error && <p className="text-center"> {error}</p>}
          {result?.length > 0 && (
            <div className=" grid grid-cols-1 gap-4 items-center ">
              {/* <table className=" border border-black bg-red-100 ">
                <thead>
                  <tr className=" flex text-sm font-bold justify-around">
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {result.map((item) => (
                    <div className="h-fit w-full" key={item.id}>
                      <tr className="flex justify-around font-medium p-2 border-b border-red-600">
                        <td className="w-1/2 text-left capitalize ">
                          {item.name}
                        </td>
                        <td className="w-1/2 text-right">{item.email}</td>
                      </tr>
                    </div>
                  ))}
                </tbody>
              </table> */}
              {result.map((item) => (
                <div
                  className="h-fit w-full gap-2   text-left capitalize p-3 font-medium "
                  key={item.id}
                >
                  {" "}
                  <div className="w-[90%] p-10 bg-slate-300 ">
                    <span>Name:</span>
                    <input
                      className="w-96 h-10 mb-2 border bg-gray-100"
                      type="text"
                      value={item.name}
                    />
                    <br />
                    <span>email:</span>
                    <input
                      className="w-96 h-10 mb-2 border bg-gray-100"
                      type="text"
                      value={item.email}
                    />
                    <br />
                    <span>Body:</span>
                    <input
                      className="w-96 h-10 mb-2 border bg-gray-100"
                      type="text"
                      value={item.body}
                    />
                  </div>
                  <div>
                    <button>edit</button>
                    <button>delete</button>
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
