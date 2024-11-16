import BakedFrish from "./Faq/BakedFrish";
import Faq from "./Faq/Faq";
import HurryUp from "./Faq/HurryUp";
import Slider from "./slider/Slider";
import About from "./about/About";
import Explor from "./ExplorFood/Explor";
import Header from "./Header";
import Layout from "./layout/Layout";

function Home() {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Layout />
      <About />
      <Explor />
      <Slider />
      <Faq />
      <BakedFrish />
      <HurryUp />
    </div>
  );
}

export default Home;
