import { footerList } from "./Constants";

const Footer = () => {
  return (
    <footer className="container p-2 px-4 text-lg text-stone-200 rounded-lg mx-auto">
      <nav className="flex justify-between px-4 mb-10">
        {footerList.map((item, index) => (
          <ul className="flex flex-col gap-3" key={index}>
            <li>{item.enterprice.title}</li>
            {item.enterprice.list.map((item, index) => (
              <li className="text-zinc-400" key={index}>
                <a href="#">{item.title}</a>
              </li>
            ))}
          </ul>
        ))}

        {footerList.map((item, index) => (
          <ul className="flex flex-col gap-3" key={index}>
            <li>{item.docs.title}</li>
            {item.enterprice.list.map((item, index) => (
              <li className="text-zinc-400" key={index}>
                <a href="#">{item.title}</a>
              </li>
            ))}
          </ul>
        ))}

        {footerList.map((item, index) => (
          <ul className="flex flex-col gap-3" key={index}>
            <li>{item.comunity.title}</li>
            {item.enterprice.list.map((item, index) => (
              <li className="text-zinc-400" key={index}>
                <a href="#">{item.title}</a>
              </li>
            ))}
          </ul>
        ))}
      </nav>
      <div className="rounded-lg flex justify-between p-2  bg-zinc-700">
        <h3>
          ©{" "}
          <a className="underline" href="https://github.com.bashkanitto">
            Bashkanitto
          </a>{" "}
          2024
        </h3>
        <p>License</p>
      </div>
    </footer>
  );
};

export default Footer;
