"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CSIAN_CULTURE } from "@/lib/queries";

// Function to decode HTML entities
const decodeHtmlEntities = (text: string) => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
};

const Culture = () => {
  const { data, loading, error } = useQuery(GET_CSIAN_CULTURE);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading culture data.</div>;

  // Find the correct layout block
  const csianData = data?.page?.flexibleContent?.flexibleContent?.find(
    (block: any) => block?.csianTitle
  );

  // Card classNames for each card, matching the original layout
  const cardClassNames = [
    "2xl:w-[33%] xl:w-[33%] lg:w-[50%] md:w-[50%] sm:w-full w-full", // card 1
    "2xl:w-[calc(33%-24px)] xl:w-[calc(33%-24px)] lg:w-[calc(50%-24px)] md:w-[calc(50%-24px)] sm:w-full w-full", // card 2
    "2xl:w-[calc(33%-12px)] xl:w-[calc(33%-12px)] lg:w-[calc(50%-12px)] md:w-[calc(50%-12px)] sm:w-full w-full", // card 3
    "2xl:w-[calc(20%-24px)] xl:w-[calc(20%-24px)] lg:w-[calc(50%-24px)] md:w-[calc(50%-24px)] sm:w-full w-full", // card 4
    "2xl:w-[calc(20%-24px)] xl:w-[calc(20%-24px)] lg:w-[calc(50%-24px)] md:w-[calc(50%-24px)] sm:w-full w-full", // card 5
    "2xl:w-[calc(30%-24px)] xl:w-[calc(30%-24px)] lg:w-[calc(50%-24px)] md:w-[calc(50%-24px)] sm:w-full w-full", // card 6
    "2xl:w-[30%] xl:w-[30%] lg:w-[50%] md:w-[50%] sm:w-full w-full", // card 7
  ];

  if (!csianData) return <div>No culture data found.</div>;

  return (
    <section className="become pt-[120px] pb-[100px]">
      <div className="max-w-[1432px] px-4 mx-auto">
        <div className="box-border max-w-[862.57px] bg-[#0F0F0F] shadow-[0px_24px_124px_rgba(231,33,37,0.22),_inset_0px_0px_20px_rgba(255,255,255,0.06)] rounded-[14px] py-[62px] px-[20px] pb-[42px] mx-auto">
          <p className="font-denton font-bold text-[26px] uppercase max-w-[400px] mx-auto text-left text-white leading-[100%]">
            {csianData.toBecomeTitle}
          </p>
          <h2 className="gradient-heading font-denton text-center font-normal 2xl:text-[151px] xl:text-[130px] lg:text-[120px] md:text-[100px] sm:text-[90px] text-[80px] max-w-[488px] mx-auto leading-[100%]">
            {decodeHtmlEntities(csianData.csianTitle)}
          </h2>
        </div>
        <div className="flex flex-wrap gap-[24px] pt-[60px] overflow-hidden">
          {csianData.perks?.map((perk: any, idx: number) => (
            <div
              key={idx}
              className={`border border-borderclr rounded-[14px] border-opacity-[50%] p-[30px] cursor-pointer 
                ${cardClassNames[idx] || "w-full"} 
                relative 2xl:h-[276px] xl:h-[260px] lg:h-[250px] md:h-[230px] sm:h-[200px] h-[200px] group overflow-hidden transition-all duration-500 ease-in-out hover:bg-white hover:bg-opacity-[16%] hover:border-white hover:border-opacity-[16%]`}
            >
              <h3 className="text-[20px] sm:text-[20px] md:text-[20px] lg:text-[25px] xl:text-[30px] 2xl:text-[36px] text-white font-bold 2xl:leading-[48px] xl:leading-[40px] lg:leading-[35px] md:leading-[30px] sm:leading-[30px] leading-[30px] pb-[14px] max-w-[328px] font-denton">
                {perk.title}
              </h3>
              <p className="font-lato text-[16px] font-medium text-white leading-[26px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                {perk.description}
              </p>
              <div className="absolute bottom-[50px] left-1/2 -translate-x-1/2 group-hover:bottom-[6px] group-hover:left-auto group-hover:right-[10px] group-hover:translate-x-0 transition-all duration-500 ease-in-out max-w-max">
                <img
                  src={perk.gif?.node?.sourceUrl}
                  alt={perk.gif?.node?.altText || perk.title}
                  height="86"
                  width="86"
                  className="2xl:w-[70px] xl:w-[70px] lg:w-[80px] md:w-[70px] sm:w-[50px] w-[50px] 2xl:h-[70px] xl:h-[70px] lg:h-[70px] md:h-[70px] sm:h-[50px] h-[50px] group-hover:!w-[50px] group-hover:!h-[50px] transition-all duration-500 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center pt-[60px]">
          <a href={csianData.becomeCsian?.url} className="inline-block group">
            <div className="btn-primary-outline">
              <div className="btn-primary">{csianData.becomeCsian?.title}</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Culture;
