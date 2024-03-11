import { Fragment } from "react";
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
  return (
    <>
      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="relative h-fit w-fit flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open dashboard menu</span>
            <button className="h-fit w-fit p-2">Team</button>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {TeamList.map((item) => (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to={item.href}
                    key={item.name}
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
export default Team;