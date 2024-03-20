import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Analytics from "./Analytics/Analytics";
import Settings from "./Setting/Settings";
import PageNotFound from "../Components/Common/Error/Page_not_found";
import Backend from "../Backend/Backend";
import Aboutus from "../Backend/Aboutus";
import Dashboard from "./Dashboard";
// import GetApi from "../FetchApi/GetApi";
import Clothes from "../Posts/Clothes/Clothes";
import ProductView from "../Posts/ProductView";
import GetApi from "../Posts/FetchApi/GetApi";

export const RouteNavigate = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route index element={<Home />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/settings" element={<Settings />} />

      <Route path="*" element={<PageNotFound />} />
      <Route path="admin" element={<Backend />}>
        {/* <Route index element={<Admin />} />{" "} */}
        <Route path="aboutus" element={<Aboutus />} />
      </Route>
      {/* <Route path="getapi" element={<GetApi />} /> */}
      {/* <Route path="/posts" element={<Posts />} /> */}
      <Route path="/posts/clothes" element={<Clothes />} />
      <Route path="/posts/posts" element={<GetApi />} />
      <Route path="/categories/:id" element={<ProductView />} />
    </Routes>
  );
};
export default RouteNavigate;
