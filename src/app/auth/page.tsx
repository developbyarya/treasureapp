import LoginIllustration from "@/assets/illustration/login.png";
import Image from "next/image";
export default function Auth() {
  return (
    <>
      <div className="px-6 bg-shades w-full pt-18 h-full">
        <h1 className="font-bold text-3xl ">
          Empowering Your Teams
          <span className="text-primary"> Financial Future!</span>
        </h1>
        <Image
          src={LoginIllustration.src}
          alt="Teamwork Illustration"
          width={390}
          height={210}
          className="w-full mt-10"
        />
      </div>
      <div className="z-10 bg-white w-full border-1 rounded-t-2xl shadow-1 rounded-r-2xl flex flex-col items-center">
        <div className="h-[1px] w-[22px] bg-[#9c9c9c] mt-4"></div>
        <p className="text-xl font-medium mt-4">
          Access Your <span className="text-primary">Financial Hub</span>
        </p>
      </div>
    </>
  );
}
