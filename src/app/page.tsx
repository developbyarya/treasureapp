import Image from "next/image";

export default function Home() {
  return (
    <Image
      src={"/logo-vert.svg"}
      alt="treasure logo vertical"
      width={220}
      height={230}
    />
  );
}
