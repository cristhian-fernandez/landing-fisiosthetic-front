import Banner from "../../components/banner/Banner";
import Instructions from "../../components/sections/Instructions";
import LocateUs from "../../components/sections/LocateUs";

const Home = (): JSX.Element => {
  return(
    <>
      <Banner />
      <Instructions />
      <LocateUs />
    </>
  )
}

export default Home;