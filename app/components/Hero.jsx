import { heroList } from "./Constants";

const Hero = () => {
  return (
    <section className="relative flex flex-col  justify-center items-center text-white text-center gap-10">
      <button className="p-1 pr-2 border border-gray-700 rounded-full flex gap-2 items-center">
        <span className="bg-green p-1 px-2 rounded-full">New</span>Introducing
        to development
      </button>
      <h1 className="text-6xl font-bold w-2/3">
        Кодируй Свои Мечты в Реальность c Craftcode
      </h1>

      <p className="w-1/2 text-xl">
        Раскрой свой потенциал в программировании: продвинутые концепции в нашей
        офлайн-школе программирования
      </p>
      <div className="p-1 rounded-2xl border border-neutral-700 mb-20">
        <button className=" p-3 px-6 bg-green rounded-xl text-xl">
          Связатся
        </button>
      </div>
      <div className="mb-40 cards w-[500px] h-60 overflow-hidden border border-gray-700 rounded-2xl flex justify-center items-cente">
        {heroList.map((item) => (
          <div
            className="flex flex-col gap-5 justify-center min-w-[400px]"
            key={item.id}
          >
            <h2 className="text-4xl">{item.h2}</h2>
            <p className="text-xl">{item.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
