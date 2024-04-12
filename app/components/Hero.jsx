const Hero = () => {
  return (
    <section className="container flex flex-col justify-center items-center text-center gap-10 mb-40">
      <button className="p-1 pr-2 border border-gray-700 rounded-full flex gap-2 items-center">
        <span className="bg-green p-1 px-2 rounded-full">New</span>Introducing
        to development
      </button>
      <h1 className="text-6xl font-bold">Crafting Code, Crafting Careers!</h1>

      <p className="w-2/3 text-xl">
        Раскрой свой потенциал в программировании: продвинутые концепции в нашей
        офлайн-школе программирования
      </p>
      <div className="p-1 rounded-2xl border border-neutral-700 mb-20">
        <button className=" p-3 px-6 bg-green rounded-xl text-xl">
          Связатся
        </button>
      </div>
    </section>
  );
};

export default Hero;
