import { Fragment, useEffect, useRef } from "react";
import { Menu, Transition } from "@headlessui/react";
import { classNames } from "./Navbar";
import { Link } from "react-router-dom";

const TeamList = [
  {
    name: "Senior",
    href: "#",
  },
  {
    name: "Intermediate",
    href: "#",
  },
  {
    name: "Junior",
    href: "#",
  },
];
const Team = () => {
  const dropdownRef = useRef(null);

  return (
    <>
      <Menu
        onMouseEnter={() => {
          dropdownRef.current.click();
        }}
        onMouseLeave={() => {
          dropdownRef.current.click();
        }}
        as="div"
        className="relative ml-3 text-center focus:outline-none py-2 flex place-content-center hover:bg-gray-700 rounded-md "
      >
        <div>
          <Menu.Button
            ref={dropdownRef}
            className="relative h-fit w-fit flex rounded-full text-sm focus:outline-none"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open dashboard menu</span>
            <button className="  p-2  ">Team</button>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100 "
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            onMouseEnter={() => {
              dropdownRef.current.click();
            }}
            onMouseLeave={() => {
              dropdownRef.current.click();
            }}
            className="absolute top-full z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            {TeamList.map((item) => (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to={item.href}
                    key={item.name}
                    className={classNames(
                      active ? "bg-gray-100 " : "",
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
export default Team;
