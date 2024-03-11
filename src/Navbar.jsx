import { Disclosure } from "@headlessui/react";
import MobileMenu from "./Mobilemenu";
import ItemsList from "./ItemsList";
import Button from "./Button";
import DropdownMenu from "./DropdownMenu";
import DisclosingPanel from "./DisclosingPanel";

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="relative flex h-16 items-center justify-between px-3 sm:px-6 lg:px-8">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}

              <MobileMenu open={open} />
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <ItemsList />
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Button label={"New Notification"} />

              {/* Profile dropdown */}
              <DropdownMenu />
            </div>
          </div>
          <DisclosingPanel />
        </>
      )}
    </Disclosure>
  );
}
