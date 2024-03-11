import React from "react";
import Navbar from "./Navbar";
import RouteNavigate from "./Dashboard/RouteNavigate";

function App() {
  return (
    <div className="h-screen text-center text-2xl font-bold ">
      <Navbar />
      <RouteNavigate />
    </div>
  );
}
export default App;
