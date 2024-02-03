import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-grey">
      <div className="g-gradient h-2"></div>
      <div className="container flex">
        <Image
          src="/assets/logotipo/logo.png"
          alt="GUILMOR: Soluções em Tecnologia da Informação"
          width={72}
          height={72}
          property="true"
          loading="lazy"
        />
      </div>
    </nav>
  );
}
