import About from "../components/About";
import Gallery from "../components/Gallery";
import Carousel from "../components/Carousel";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Renome | Home</title>
        <meta name="keywords" content="Renome" />
      </Head>
      <Carousel />
      <About />
      <Gallery />
    </>
  );
};

export default Home;
