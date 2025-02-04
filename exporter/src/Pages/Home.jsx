import { OurService } from "../Components/Home/OurService";
import { Slider } from "../Components/Home/Slider";
import { WeAre } from "../Components/Home/WeAre";

export const Home = () => {
  return (
    <>
      {" "}
      <Slider />
      <WeAre />
      <OurService />
    </>
  );
};
