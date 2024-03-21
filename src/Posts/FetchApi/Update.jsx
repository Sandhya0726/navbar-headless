import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [result, setResult] = useState();
  const [title, setTitle] = useState();
  const [email, setEmail] = useState();

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response.data);
        setResult(response.data);
        setTitle(response.data.title);
        setEmail(response.data.id);
      });
  }, [id]);
  //   const handleChange = (e) => {
  //     setResult(e.target.value);
  //     console.log(e.target.value, "clicked");
  //     const { name, value } = e.target;
  //     setResult((prevResult) => ({
  //       ...prevResult,
  //       [name]: value,
  //     }));
  //     console.log(e.target.value);
  //   };

  const handleUpdate = (event) => {
    const payload = {
      id: email,
      title,
    };
    event.preventDefault();
    axios
      .patch(`https://jsonplaceholder.typicode.com/posts/${id}`, payload)
      .then((response) => {
        setResult(response.data);
        setTitle(response.data.title);
        // setEmail(response.data.id);
        // navigate("/posts/posts");
      });
  };

  return (
    <div className="flex justify-center w-full h-full items-center">
      <div className="bg-gray-200 w-[30%] p-10">
        <div className=" text-sm font-medium mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="h-10 border"
          />
        </div>
        <div className=" text-sm font-medium mb-2">
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.email);
            }}
            className="h-10 border"
          />
        </div>
        <button onClick={handleUpdate} className="bg-blue-200 p-2 text-sm">
          Update
        </button>
      </div>
    </div>
  );
};
export default Update;
