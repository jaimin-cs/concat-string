"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_EVENTS_BANNER } from "@/lib/queries";

const Banner = () => {
  const { loading, error, data } = useQuery(GET_EVENTS_BANNER);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading banner data</div>;

  const bannerData = data?.page?.flexibleContent?.flexibleContent?.find(
    (item: any) => item.eventBannerTitle
  );

  const title = bannerData?.eventBannerTitle;
  const backgroundImage = bannerData?.eventBannerImage?.node?.sourceUrl;

  return (
    <section
      className="bg-cover 2xl:pt-[331px] xl:pt-[274px] lg:pt-[250px] md:pt-[200px] sm:pt-[180px] pt-[160px] 2xl:pb-[453px] xl:pb-[344px] lg:pb-[330px] md:pb-[250px] sm:pb-[200px] pb-[180px] bg-no-repeat bg-left"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container max-w-[1440px] 2xl:px-[20px] xl:px-[20px] lg:px-[20px] md:px-[15px] sm:px-[12px] px-[10px] mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="h1 text-white max-w-[662px] leading-[100%]">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
