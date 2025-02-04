import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Aboutus } from "./Aboutus";
import { Contactus } from "./Contactus";
import { Gold } from "./Gold";
import { OilProduct } from "./Oil";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<Aboutus />} />
        <Route path='/contact-us' element={<Contactus />} />
        <Route path='/products/gold' element={<Gold />} />
        <Route path='/products/oil' element={<OilProduct />} />
      </Routes>
    </>
  );
};
