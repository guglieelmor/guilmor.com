import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <section className="bg-grey">
        <div className="container mx-auto py-10">
          <span>guilmor.softwares@gmail.com</span>
          <hr />
          <div className="flex">
            <span className="pr-5"> 
                <Link href="/privacidade"> 
                    Politícas de privacidade
                </Link> 
            </span> 
          </div>
        </div>
      </section>
      <div className="black h-20 g-grey-black"></div>
      <div className="g-gradient h-5 opacity-30"></div>
      <div className="g-gradient h-5 opacity-25 mt-5"></div>
      <div className="g-gradient h-5 opacity-20 mt-5"></div>
      <div className="g-gradient h-5 opacity-15 mt-5"></div>
      <div className="g-gradient h-5 opacity-10 mt-5"></div>
      <div className="g-gradient h-5 opacity-5 mt-5"></div>
      <div className="g-gradient h-5 opacity-0 mt-5"></div>
    </footer>
  );
}
