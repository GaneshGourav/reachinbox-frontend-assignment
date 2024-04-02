import { Route, Routes } from "react-router-dom";

import Onebox from "../Pages/onebox";
import Index from "../Pages";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/onebox" element={<Onebox />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
