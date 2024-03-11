import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Analytics from "./Analytics/Analytics";
import Settings from "./Setting/Settings";

export const RouteNavigate = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};
export default RouteNavigate;
