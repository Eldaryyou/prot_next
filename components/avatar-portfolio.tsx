"use client";

import Image from "next/image";
import MotionTransition from "./transition-cpmponent";

const AvatarPortfolio = () => {
  return (
    <MotionTransition
      position="bottom"
      className="bottom-0 left-0 hidden md:inline-block md:absolute"
    >
      <Image
        src="/avatar-works.png"
        width={150}
        height={150}
        className="w-full h-full"
        alt="Avatar Portfolio"
      ></Image>
    </MotionTransition>
  );
};

export default AvatarPortfolio;
