import { navigation } from "./ArrayData/Navigate";
import { classNames } from "./Navbar";
import MenuItemsDropdown from "./MenuItemsDropdown";
import ProductDropDown from "./ProjectDRopDown";
import Team from "./Team";
import Posts from "../Posts/Posts";

const ItemsList = () => {
  return (
    <>
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            item.current
              ? "bg-gray-900 text-white  "
              : "text-gray-300  hover:text-white",
            "rounded-md px-3 py-3 text-sm font-medium w-32"
          )}
          aria-current={item.current ? "page" : undefined}
        >
          {item.value == "dashboard" && <MenuItemsDropdown />}
          {item.value == "projects" && <ProductDropDown />}
          {item.value == "team" && <Team />}
          {item.value == "posts" && <Posts />}
        </a>
      ))}
    </>
  );
};
export default ItemsList;
