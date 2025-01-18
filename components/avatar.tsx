"use client";
import Image from "next/image";
import MotionTransition from "./transition-cpmponent";

const Avatar = () => {
  return (
    <MotionTransition
      position="bottom"
      className="bottom-0 right-0 hidden md:inline-block md:absolute"
    >
      <Image
        src="/avatar-1.png"
        width={200}
        height={200}
        className="w-full h-full"
        alt="Avatar"
      ></Image>
    </MotionTransition>
  );
};

export default Avatar;
