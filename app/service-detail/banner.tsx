"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_SERVICE_BANNER } from "@/lib/queries";

const Banner = () => {
  const { data } = useQuery(GET_SERVICE_BANNER);

  const techNode =
    data?.page?.flexibleContent?.flexibleContent?.[0]?.technologies?.nodes?.[0];
  const serviceName = techNode?.technologiesSettings?.serviceName || "Service";
  const bannerImage =
    techNode?.featuredImage?.node?.sourceUrl ||
    "/images/service-page/service-banner.png";
  const bannerAlt = techNode?.featuredImage?.node?.altText || serviceName;

  return (
    <section
      className="bg-cover 2xl:pt-[254px] xl:pt-[254px] lg:pt-[250px] md:pt-[230px] sm:pt-[200px] pt-[200px] 2xl:pb-[334px] xl:pb-[334px] lg:pb-[330px] md:pb-[300px] sm:pb-[280px] pb-[250px] bg-no-repeat bg-bottom-left"
      style={{ backgroundImage: `url('${bannerImage}')` }}
      aria-label={bannerAlt}
    >
      <div className="container max-w-[1440px] px-[20px] mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="h1 text-white max-w-[662px] leading-[100%]">
            {serviceName}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;