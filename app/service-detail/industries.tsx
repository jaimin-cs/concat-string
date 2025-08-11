"use client";
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_SERVICE_INDUSTRIES } from '@/lib/queries';

const Industries = () => {
  const { data } = useQuery(GET_SERVICE_INDUSTRIES);

  const techNode =
    data?.page?.flexibleContent?.flexibleContent?.find(
      (item: any) => item?.technologies?.nodes?.[0]?.technologiesSettings?.industryServeTitle
    )?.technologies?.nodes?.[0]?.technologiesSettings;

  const industryServeTitle = techNode?.industryServeTitle || 'Industries We Serve';
  const industries = techNode?.industriesName || [];

  return (
    <section className="industries bg-[url(/images/service-page/in-bg.png)] bg-center py-[145px] bg-cover bg-no-repeat">
      <div className="container max-w-[1440px] px-[20px] mx-auto">
        <div className="flex flex-col 2xl:gap-[60px] py-[20px] xl:gap-[60px] lg:gap-[50px] md:gap-[40px] sm:gap-[30px] gap-[30px] items-center justify-center">
          <h2 className="h2  2xl:text-[86px] xl:text-[86px] text-black text-center">{industryServeTitle}</h2>
          <div className="flex items-center justify-center 2xl:gap-[40px] xl:gap-[40px] lg:gap-[30px] md:gap-[30px] sm:gap-[20px] gap-[20px] flex-row flex-wrap">
            {industries.map((industry: any, idx: number) => (
              <div
                key={industry.industryName}
                className={`flex items-center gap-[12px] ${idx !== industries.length - 1
                  ? '2xl:pe-[40px] xl:pe-[40px] lg:pe-[30px] md:pe-[30px] sm:pe-[20px] pe-[20px] border-r border-r-[#D8D8D880]'
                  : ''
                  }`}
              >
                <span className="bg-[linear-gradient(312.85deg,_#2C3894_11.22%,_#54A3DA_86.03%)] w-[14px] h-[14px] rounded-full"></span>
                <p
                  className="font-lato font-bold 2xl:text-[26px] xl:text-[26px] lg:text-[26px] md:text-[25px] sm:text-[20px] text-[18px] leading-[38px] text-[#252525] w-[calc(100%-24px)] hover:bg-gradient-to-b hover:from-[#E72125] hover:to-[#8E1D1D] hover:bg-clip-text hover:text-transparent transition-colors duration-200"
                >
                  {industry.industryName}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;