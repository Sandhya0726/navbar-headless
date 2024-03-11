import { navigation } from "./Navigate";
import { classNames } from "./Navbar";
import MenuItemsDropdown from "./MenuItemsDropdown";
import ProductDropDown from "./ProjectDRopDown";
import Team from "./Team";

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
              : "text-gray-300 hover:bg-gray-700 hover:text-white",
            "rounded-md px-3 py-2 text-sm font-medium"
          )}
          aria-current={item.current ? "page" : undefined}
        >
          {item.value == "dashboard" && <MenuItemsDropdown />}
          {item.value == "projects" && <ProductDropDown />}
          {item.value == "team" && <Team />}
          {item.value == "calender" && <ProductDropDown />}
        </a>
      ))}
    </>
  );
};
export default ItemsList;
