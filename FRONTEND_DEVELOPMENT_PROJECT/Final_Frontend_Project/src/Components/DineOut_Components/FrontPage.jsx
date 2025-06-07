import { FrontPageItems } from "../../utils/DineOut_Utils/FrontPage_Data";
import FrontPageCard from "./FrontPageCard";
export default function FrontPage() {
  return (
    <>
      <div className="w-[80%] mx-auto mt-20">
        <h1 className="text-2xl font-bold">
          Discover best restaurants on Dineout
        </h1>
        <div className="flex flex-wrap gap-5 mb-20 mt-5">
          {FrontPageItems.map((FrontPageData) => (
            <FrontPageCard
              key={FrontPageData?.info?.id}
              FrontPageData={FrontPageData}
            ></FrontPageCard>
          ))}
        </div>
      </div>
    </>
  );
}
