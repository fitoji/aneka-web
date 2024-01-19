import Facebook from "../icons/facebook.tsx";
import Instagram from "../icons/instagram.tsx";
import Logo from "../icons/logo.tsx";


const Footer = () => {
  return (
    <footer className="mt-[135px] w-full">
      <div className="w-full max-w-[1200px] px-12 xl:px-0 mx-auto pb-[135px] grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-6">
        {/* start */}
        <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center">
          <a
            href="/" title='home'>
            <Logo />
          </a>
          <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray pt-[18px] pb-[33px]">
            Cada crujiente manjar es una obra maestra que refleja nuestro compromiso con la calidad y la autenticidad.
          </p>
          <div className="flex gap-5 md:gap-[54px]">
            <a href="https://www.facebook.com/aneka.garrapi/" title='facebook'>
              <Facebook />
            </a>
            <a href="https://www.instagram.com/aneka.garrapi/" title='instagram'>
              <Instagram />
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4 items-center justify-center">
          <h5 className="text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose">
            Páginas
          </h5>
          <div className="flex flex-col gap-6">
            <a
              href="/about"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Acerca de Nosotros
            </a>

            <a
              href="/contact"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Contáctanos
            </a>
          </div>
        </div>

        <div className="col-span-1 flex flex-col gap-4 items-center justify-center">
          <h5 className="text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose">
            Contacto
          </h5>
          <div className="flex flex-col gap-6">
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              Barcelona, ES
            </p>
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              aneka.garrapi@gmail.com
            </p>
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              (34) 123 - 1234
            </p>
          </div>
        </div>

        {/* End */}
      </div>
    </footer>
  );
};

export default Footer;
