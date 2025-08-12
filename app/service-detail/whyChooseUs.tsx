"use client";
import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_SERVICE_DETAIL_WHY_CHOOSE_US } from '@/lib/queries'

const WhyChooseUs = () => {
  const { data } = useQuery(GET_SERVICE_DETAIL_WHY_CHOOSE_US);

  const techNode =
    data?.page?.flexibleContent?.flexibleContent?.find(
      (item: any) => item?.technologies
    )?.technologies?.nodes?.[0];

  const title = techNode?.technologiesSettings?.whyChooseTitle || 'Why Choose Us';
  const stats = techNode?.technologiesSettings?.companyStatistic || [];

  return (
    <section className="wy-choose pt-[120px]">
      <div className="container max-w-[1400px] px-[20px] mx-auto w-full">
        <div className="flex flex-col items-center justify-center 2xl:gap-[60px] xl:gap-[60px] lg:gap-[50px] md:gap-[40px] sm:gap-[30px] gap-[25px] pb-[120px]">
          <h2 className="h2 text-white">{title}</h2>
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 2xl:gap-[30px] xl:gap-[30px] lg:gap-[25px] md:gap-[25px] sm:gap-[20px] gap-[20px] w-full justify-center items-center min-h-[225px]">
            {stats.map((stat: any, idx: number) => (
              <div
                key={idx}
                className="box px-[30px] py-[30px] rounded-[10px] bg-[#D9D9D94D] border border-white flex flex-col items-start justify-center [15px] gap-[10px] shadow-custom transition-all duration-300 ease-in-out hover:py-[50px] hover:scale-y-[1.1] hover:bg-[linear-gradient(115.51deg,_#E72125_32.11%,_#8E1D1D_116.15%)] group h-[178px] hover:border-transparent"
              >
                <h3 className="text-white h3 group-hover:text-white">{stat.statisticNumber}</h3>
                <span className="font-denton text-[22px] font-medium leading-[100%] text-white group-hover:text-white">
                  {stat.statisticLabel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs
