import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
  };
}

const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props;
  const { title, image, urlGithub, urlDemo } = data;
  return (
    <div className="p-4 border border-teal-50 rounded-xl md:w-52">
      <h3 className="mb-3 text-lg">{title}</h3>
      <Image
        src={image}
        alt="Product image"
        width={200}
        height={200}
        className="w-full md:w-[160px] rounded-2xl h-auto md:h-[100px]"
      ></Image>
      <div className="flex gap-5 mt-4">
        <Link
          href={urlGithub}
          target="_blank"
          className="p-2 transition duration-150
              rounded-lg bg-slate-500 hover:bg-slate-500/80"
        >
          Github
        </Link>
        <Link
          href={urlDemo}
          target="_blank"
          className="p-2 transition duration-150
              rounded-lg bg-secondary hover:bg-secondary/80"
        >
          Github
        </Link>
      </div>
    </div>
  );
};

export default PortfolioBox;
