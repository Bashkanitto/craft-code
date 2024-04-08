import Image from "next/image";
import { advantagesList } from "./Constants";

const Footer = () => {
  return (
    <footer class="container mx-auto flex flex-col md:flex-row justify-between items-center bg-zinc-700 text-center gap-10">
      <h2>© Smavy 2024</h2>
      <p>License</p>
    </footer>
  );
};

export default Footer;
