import { CustomButton } from "./CustomButton";

const Contact = () => {
  return (
    <section
      id="contact"
      className="container mx-auto mb-40  flex flex-col lg:flex-row  gap-10 justify-between items-center lg:items-center"
    >
      <h2 className="flex flex-wrap gap-4 text-xl md:text-3xl text-center lg:text-start w-full md:w-1/2 ">
        Оставьте свои контакты, мы свами обьязательно свяжемся
      </h2>
      <div className="w-full md:w-[400px] p-5 bg-slate-900 rounded-2xl">
        <input
          type="text"
          className="bg-transparent border w-full p-4  rounded-2xl mb-5"
          placeholder="E-mail"
        />
        <input
          type="text"
          className="bg-transparent border w-full p-4  rounded-2xl mb-10"
          placeholder="Message"
        />
        <CustomButton>Оставить заявку</CustomButton>
      </div>
    </section>
  );
};

export default Contact;
