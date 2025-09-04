import Featurest from "@/components/landingpage/FeatureLand";
import Resprime from "@/components/landingpage/HeadPrimary";
import Story from "@/components/landingpage/LatestStory";
import WorkerFiles from "@/components/landingpage/Worker";

export default function Home() {
  return (
    <div className="w-full">
      <Resprime/>
      <Featurest/>
      <WorkerFiles/>
      <Story/>
    </div>
  );
}
