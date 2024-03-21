import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { classNames } from "../Components/Navbar";
import { Link } from "react-router-dom";
const Projects = [
  {
    name: "Clothes",
    href: "/posts/clothes",
  },
  {
    name: "GetPosts",
    href: "/posts/posts",
  },
];
const Posts = () => {
  const [toggleDropdown, isToggleDropdown] = useState(false);

  return (
    <>
      <Menu
        as="div"
        className="relative ml-3 flex  py-2 place-content-center hover:bg-gray-700 rounded-md"
      >
        <div>
          <Menu.Button
            onMouseEnter={() => {
              isToggleDropdown(true);
            }}
            onMouseLeave={() => {
              isToggleDropdown(false);
            }}
            className="relative  flex  text-sm "
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open dashboard menu</span>
            <button className=" p-2 ">Posts</button>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          show={toggleDropdown}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            onMouseEnter={() => {
              isToggleDropdown(true);
            }}
            onMouseLeave={() => {
              isToggleDropdown(false);
            }}
            className="absolute top-full text-left z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            {Projects.map((item) => (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={item.href}
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};
export default Posts;
