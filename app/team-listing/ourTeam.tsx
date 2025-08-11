"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TEAM_LISTING } from "@/lib/queries";

const OurTeam = () => {
  const { loading, error, data } = useQuery(GET_TEAM_LISTING);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading banner data</div>;

  // Extract data from the GraphQL response
  const teamListingData = data?.page?.flexibleContent?.flexibleContent?.find(
    (item: any) => item?.teamListTitle
  );

  const teamListTitle = teamListingData?.teamListTitle;
  const bannerImage = teamListingData?.teamListBannerImage?.node?.sourceUrl;
  const bannerAltText = teamListingData?.teamListBannerImage?.node?.altText;

  // Split title into words for line breaks
  const titleWords = teamListTitle ? teamListTitle.split(" ") : [];

  return (
    <section
      className="bg-cover 2xl:pt-[311px] xl:pt-[274px] lg:pt-[250px] md:pt-[200px] sm:pt-[180px] pt-[160px] 2xl:pb-[351px] xl:pb-[344px] lg:pb-[330px] md:pb-[250px] sm:pb-[200px] pb-[180px] bg-no-repeat bg-left"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="container max-w-[1440px] 2xl:px-[20px] xl:px-[20px] lg:px-[20px] md:px-[15px] sm:px-[12px] px-[10px] mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="h1 text-white leading-[100%]">
            {titleWords.map((word: string, index: number) => (
              <React.Fragment key={index}>
                {word}
                {index < titleWords.length - 1 && " "}
              </React.Fragment>
            ))}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
