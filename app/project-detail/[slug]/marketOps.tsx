"use client";
import React from "react";

interface Props {
  project: any;
  onLanguagesChange?: (langs: string[]) => void;
}

const MarketOps: React.FC<Props> = ({ project, onLanguagesChange }) => {
  const projectNode = project;

  React.useEffect(() => {
    if (projectNode && onLanguagesChange) {
      const langs = projectNode.languages?.nodes?.map((l: any) => l.name) || [];
      onLanguagesChange(langs);
    }
  }, [projectNode, onLanguagesChange]);

  if (!projectNode) return <div>No data found.</div>;

  const { heading, subHeading } = projectNode.projectSettings || {};
  const image = projectNode.featuredImage?.node;

  return (
    <section className="bg-[url(/images/project-detail/bg.png)] bg-cover 2xl:pt-[254px] xl:pt-[254px] lg:pt-[250px] md:pt-[230px] sm:pt-[200px] pt-[200px] 2xl:pb-[334px] xl:pb-[334px] lg:pb-[330px] md:pb-[300px] sm:pb-[280px] pb-[250px] bg-no-repeat bg-center">
      <div className="container max-w-[1432px] px-[20px] mx-auto">
        <div className="flex justify-between items-center 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col gap-[30px]">
          <div className="flex flex-col 2xl:order-1 xl:order-1 lg:order-1 md:order-1 sm:order-2 order-2">
            <h1 className="font-denton font-bold 2xl:text-[86px] xl:text-[86px] lg:text-[80px] md:text-[75px] sm:text-[70px] text-[60px] leading-[120%] bg-clip-text text-transparent bg-gradient-to-b from-[#E72125] to-[#8E1D1D]">
              {heading}
            </h1>
            <p className="font-lato font-semibold text-[22px] leading-[34px] text-[#252525]">
              {subHeading}
            </p>
          </div>
          <div className="flex 2xl:order-2 xl:order-2 lg:order-2 md:order-2 sm:order-1 order-1">
            {image && (
              <img
                src={image.sourceUrl}
                alt={image.altText}
                width="436"
                height="259"
                className="2xl:w-[436px] xl:w-[436px] lg:w-[436px] md:w-[400px] sm:w-[300px] w-[250px]"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOps;
