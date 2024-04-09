import { footerList } from "./Constants";

const Footer = () => {
  return (
    <footer class="container p-2 px-4 text-lg text-stone-200 rounded-lg mx-auto">
      <nav className="flex justify-between px-4 mb-10">
        {footerList.map((item) => (
          <ul className="flex flex-col gap-3" key={item}>
            <li>{item.enterprice.title}</li>
            {item.enterprice.list.map((item) => (
              <li className="text-zinc-400" key={item.link}>
                <a href="#">{item.title}</a>
              </li>
            ))}
          </ul>
        ))}
        {footerList.map((item) => (
          <ul className="flex flex-col gap-3" key={item}>
            <li>{item.docs.title}</li>
            {item.enterprice.list.map((item) => (
              <li className="text-zinc-400" key={item.link}>
                <a href="#">{item.title}</a>
              </li>
            ))}
          </ul>
        ))}
        {footerList.map((item) => (
          <ul className="flex flex-col gap-3" key={item}>
            <li>{item.comunity.title}</li>
            {item.enterprice.list.map((item) => (
              <li className="text-zinc-400" key={item.link}>
                <a href="#">{item.title}</a>
              </li>
            ))}
          </ul>
        ))}
      </nav>
      <div className="rounded-lg flex justify-between p-2  bg-zinc-700">
        <h3>© Smavy 2024</h3>
        <p>License</p>
      </div>
    </footer>
  );
};

export default Footer;
