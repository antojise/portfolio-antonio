import Image from "next/image";
import Link from "next/link";
import Logo from "../../icons/logo.png";

export default function Navbar() {
  return (
    <header className="py-6 md:px-16 px-6 border-b border-zinc-800 z-30 md:mb-28 mb-20 sticky top-0 bg-zinc-900/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} width={25} height={25} alt="logo" />
        </Link>
        <nav>
          <ul className="flex items-center gap-x-8">
            <li>
              <a
                href="#sobre"
                className="hover:text-purple-400 duration-300"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#habilidades"
                className="hover:text-purple-400 duration-300"
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#projetos"
                className="hover:text-purple-400 duration-300"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#experiencia"
                className="hover:text-purple-400 duration-300"
              >
                Experiência
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="hover:text-purple-400 duration-300"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
