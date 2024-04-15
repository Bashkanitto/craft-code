import About from "./components/About";
import Advantages from "./components/Advantages";
import Comunity from "./components/Comunity";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Request from "./components/Request";
import Review from "./components/Review";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="overflow-hidden text-white">
        <Hero />
        <About />
        <Advantages />
        <Request />
        <Comunity />
        <Review />
        <Info />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
