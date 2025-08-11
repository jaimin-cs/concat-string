"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_WHY_CONCATSTRING_PARTNER } from "@/lib/queries";
import "@/css/services.css";

const WhyConcatString = () => {
  const { data } = useQuery(GET_WHY_CONCATSTRING_PARTNER);
  // Extract the relevant data
  const techSettings = data?.page?.flexibleContent?.flexibleContent?.find(
    (block: any) =>
      block?.technologies?.nodes?.[0]?.technologiesSettings
        ?.concatstringPartnerTitle
  )?.technologies?.nodes?.[0]?.technologiesSettings;

  if (!techSettings) return null;

  const { concatstringPartnerTitle, partnerImage, partnerFeatures } =
    techSettings;

  return (
    <section className="why pt-[120px]">
      <div className="container max-w-[1440px] px-[20px] mx-auto w-full">
        <div className="flex flex-col items-center justify-center gap-[60px]">
          <h2 className="h2 text-white text-center 2xl:leading-[122px] xl:leading-[122px] lg:leading-[120px] md:leading-[70px] sm:leading-[50px] leading-[50px]">
            {concatstringPartnerTitle}
          </h2>
          <div className="flex items-top justify-between 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col 2xl:gap-[60px] xl:gap-[60px] lg:gap-[50px] md:gap-[40px] sm:gap-[30px] gap-[30px]">
            <div className="2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-full sm:w-full w-full flex items-center justify-center relative why-img">
              {partnerImage?.node?.sourceUrl && (
                <img
                  src={partnerImage.node.sourceUrl}
                  alt={partnerImage.node.altText || ""}
                  width="670"
                  height="776"
                />
              )}
            </div>
            <div className="relative 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-full sm:w-full w-full">
              <div className="flex flex-col gap-[22px] max-h-[740px] overflow-y-auto scrollbar-hide">
                {partnerFeatures?.map((feature: any, idx: number) => (
                  <div
                    key={idx}
                    className="p-[1px] rounded-[14px] bg-[linear-gradient(180deg,_#54A3DA_0%,_#E72125_100%)] w-full"
                  >
                    <div className="flex flex-col gap-[16px] items-start justify-start bg-black rounded-[14px] h-full w-full 2xl:p-[30px] xl:p-[30px] lg:p-[30px] md:p-[25px] sm:p-[20px] p-[20px]">
                      <h5 className="font-denton font-bold 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[20px] text-[18px] leading-[100%] text-white">
                        {feature.featureTitle}
                      </h5>
                      <div
                        className="font-lato text-[17px] leading-[28px] font-normal text-[#E9E9E9]"
                        dangerouslySetInnerHTML={{
                          __html: feature.featureDescription,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="pointer-events-none absolute bottom-0 left-0 w-full 2xl:h-[132px] xl:h-[132px] lg:h-[102px] md:h-[90px] sm:h-[40px] h-[30px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000000_100%)] z-10 2xl:block xl:block lg:block md:hidden sm:hidden hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyConcatString;