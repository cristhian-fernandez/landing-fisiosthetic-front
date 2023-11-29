import Banner from "../../components/banner/Banner";
import Benefits from "../../components/sections/Benefits";
import Diagnostic from "../../components/sections/Diagnostic";
import Instructions from "../../components/sections/Instructions";
import LocateUs from "../../components/sections/LocateUs";

const Home = (): JSX.Element => {
  return(
    <>
      <Banner />
      <Instructions />
      <Diagnostic />
      <Benefits />
      <LocateUs />
    </>
  )
}

export default Home;