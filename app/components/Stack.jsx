import Image from "next/image";
import { stack } from "./Constants";

const Stack = () => {
  return (
    <section class="container mx-auto mb-20">
      <div className="flex flex-col items-center">
        <h2 className="w-1/2 text-center">
          Seamlessly integrates with your favorite frontend tools
        </h2>
        <p>Orrupti aut temporibus ariatur.</p>
        <div className="flex flex-wrap gap-3 w-1/2">
          {stack.map((item) => (
            <button className="hover:scale-110 duration-200" key={item}>
              <Image
                className=" bg-gradient-to-br to-gray-500 from-gray-800 w-20 h-20 p-5 rounded-[24px]  "
                width={30}
                height={30}
                src={item}
                alt={item}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
