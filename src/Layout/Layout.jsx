import Navbar from "../Components/Navbar";

export const Layout = (props) => {
  return (
    <div className={props.class}>
      <Navbar />
      {props.children}
    </div>
  );
};
