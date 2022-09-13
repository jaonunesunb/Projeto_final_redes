import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Apresentacao from "../pages/apresentacao";

const Way = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apresentacao" element={<Apresentacao />} />
    </Routes>
  );
};

export default Way;
