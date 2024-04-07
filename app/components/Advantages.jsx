import Image from "next/image";
import { advantagesList } from "./Constants";

const Advantages = () => {
  return (
    <section class="relative flex flex-col  justify-center items-center text-white text-center gap-10">
      <div className="blocks flex flex-col md:flex-row">
        {advantagesList.map((item) => (
          <div className="border w-full" key={item.id}>
            <Image width={100} height={100} src={item.img} />
            <h2>{item.h2}</h2>
            <p>{item.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
