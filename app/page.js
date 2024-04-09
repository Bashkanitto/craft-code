import Advantages from "./components/Advantages";
import Comunity from "./components/Comunity";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stack from "./components/Stack";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden text-white">
        <Hero />
        <Advantages />
        <Stack />
        <Comunity />
      </main>
      <Footer />
    </>
  );
}
