import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import AvatarServices from "../../../components/avatar-services";
import SliderServices from "@/components/slider-services";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <div
        className=" grid items-center justify-center
      h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20 "
      >
        <div className="max-w-[350px]">
          <h1 className="text-2xl leading-tight mt-20 text-center md:text-left md:text-4xl md:mt-0 md:mb-5">
            Mis<span className="font-bold text-secondary"> Servicios</span>
          </h1>
          <p className="mb-3 text-xl text-gray-300">
            Ofrezco servicio de desarrollo web fontend, creando interfaces
            atractivas y funcionales que mejoran la experiencia del usuario. Con
            un sólido conocimiento de UX, garantizo que cada proyecto no solo
            sea visiblemente impactante, sino también fácil de navegar. Estoy
            aquí par ayudar a llevar tu visión digital a la realidad.
          </p>
          <button className=" relative px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65 md:ml-20">
            Contacta conmigo
          </button>
        </div>
        {/*slider*/}
        <div>
          <SliderServices />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
