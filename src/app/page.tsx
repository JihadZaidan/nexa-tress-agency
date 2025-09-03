import Featurest from "@/components/landingpage/FeatureLand";
import Resprime from "@/components/landingpage/HeadPrimary";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <Resprime/>
      <Featurest/>
    </div>
  );
}
