import Advantages from "./components/Advantages";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Advantages />
      </main>
    </>
  );
}
