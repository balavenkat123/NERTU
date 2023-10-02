import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import RecentPublications from "../components/RecentPublications";

import WorkshopList from "../components/WorkshopList";


function Home() {
  return (
    <>
      {/* <Navbar/> */}
      <Hero/>
      <WorkshopList/>
      <RecentPublications/>
      
    </>
  );
}

export default Home;
