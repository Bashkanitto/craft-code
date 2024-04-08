import Advantages from "./components/Advantages";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stack from "./components/Stack";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Advantages />
        <Stack />
      </main>
      <Footer />
    </>
  );
}
