import Featurise from "@/components/expertise/centertise";
import ExpertiseFAQ from "@/components/expertise/featuresFAQ";
import Uppertise from "@/components/expertise/uppertise";

export default function Expertise() {
    return (
        <div className="w-full">
            <Uppertise/>
            <Featurise/>
            <ExpertiseFAQ/>
        </div>
    )
}