import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle-image";
import ContainerPage from "@/components/container";
import PortfolioBox from "@/components/portfolio-box";
import TransitionPage from "@/components/transition-page";
import { dataPortfolio } from "../../../data";

const PortfolioPage = () => {
  return (
    <ContainerPage>
      <TransitionPage />
      <AvatarPortfolio />
      <CircleImage />

      <div className="flex flex-col justify-center h-full md:mt-[-20px] ">
        <h1
          className="text-2xl leading-tight text-center
        md:text-4xl mt-[-11px] md:mt-[-30px] mb-2 md:mb-4"
        >
          Mis ultimos{" "}
          <span className="text-secondary font-bold">trabajos realizados</span>{" "}
        </h1>
        <div
          className="relative z-10 grid max-w-5xl
               gap-4 mx-auto mt-4 sm:grid-cols-2 md:mt-2 md:grid-cols-4 md:gap-4"
        >
          {dataPortfolio.map((data) => (
            <PortfolioBox key={data.id} data={data} />
          ))}
        </div>
      </div>
    </ContainerPage>
  );
};

export default PortfolioPage;
