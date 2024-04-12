import { Mail, MapPin, Phone } from "lucide-react";

const Info = () => {
  return (
    <section className="container mx-auto mb-40">
      <div className="flex flex-col items-center">
        <p className="text-green">Контакты</p>
        <h2 className="w-full md:w-1/2 text-center mb-10">Наши контакты</h2>
        <div className="flex flex-wrap border rounded-full p-8  w-full justify-between">
          <div className="flex gap-4 border-r w-1/3 justify-center">
            <MapPin color="#00e645" strokeWidth={2.25} />
            <span>Жамб область, район Байзак, Бурыл, ул. 9 мая 5</span>
          </div>
          <div className="flex gap-4 border-r w-1/3 justify-center">
            <Phone color="#00e645" strokeWidth={2.25} />
            <span>+7 (707) 329 7103</span>
          </div>
          <div className="flex gap-4 justify-center">
            <Mail color="#00e645" strokeWidth={2.25} />
            <span>craft.code.kz@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
