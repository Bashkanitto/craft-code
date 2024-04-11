import Advantages from "./components/Advantages";
import Comunity from "./components/Comunity";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import Review from "./components/review";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="overflow-hidden text-white">
        <Hero />
        <Advantages />
        <Stack />
        <Comunity />
        <Review />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
