import Image from "next/image";

const CircleImage = () => {
  return (
    <div className="bottom-0 right-0 hidden md:inline-block md:absolute">
      <Image
        src="/circles.png"
        width={250}
        height={250}
        alt="Circle"
        className="w-full h-full"
      ></Image>
    </div>
  );
};

export default CircleImage;
