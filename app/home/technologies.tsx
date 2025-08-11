"use client";

import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_OUR_TECHNOLOGIES } from "@/lib/queries";
import "@/css/home.css";

const Technologies = () => {
  useEffect(() => {
    const scrollContent = document.querySelector(
      ".scroll-content"
    ) as HTMLElement;
    const firstSection = scrollContent?.querySelector(".flex") as HTMLElement;

    if (!scrollContent || !firstSection) return;

    const setInitialHeight = () => {
      const firstHeight = firstSection.getBoundingClientRect().height;
      scrollContent.style.height = `${firstHeight}px`;
    };

    window.addEventListener("load", setInitialHeight);
    return () => window.removeEventListener("load", setInitialHeight);
  }, []);

  const { data, loading, error } = useQuery(GET_OUR_TECHNOLOGIES);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading technologies section.</div>;

  const techSection =
    data?.page?.flexibleContent?.flexibleContent?.find(
      (item: any) => item?.weProvideTitle
    ) || {};

  const technologies = techSection.technologies?.nodes || [];

  return (
    <section className="explore-technologies pt-[100px]">
      <div className="max-w-[1432px] px-4 mx-auto">
        <div className="flex justify-between items-start gap-[20px] flex-col lg:flex-row">
          <h2 className="title text-white h2 tracking-normal">
            {techSection.weProvideTitle}
          </h2>
          <a
            href={techSection.exploreTechnologies?.url}
            className="btn-primary btn-primary 2xl:h-[82px] xl:h-[82px] lg:h-[80px] md:h-[70px] sm:h-[60px] h-[60px] gap-[10px] 2xl:w-[410x] xl:w-[410px] lg:w-[360px] md:w-max sm:w-max w-max 2xl:px-[40px] xl:px-[40px] lg:px-[40px] md:px-[30px] sm:px-[20px] px-[20px] 2xl:text-[24px] xl:text-[24px] lg:text-[18px] md:text-[18px] lg:text-[18px] sm:text-[18px] text-[16px] transition-all duration-300 ease-in-out cursor-pointer hover:shadow-[inset_0_0_16px_rgba(255,255,255,0.26),0_24px_124px_rgba(231,33,37,0.22)]"
          >
            {techSection.exploreTechnologies?.title}
            <img
              src="/images/gif/progress.gif"
              alt="Progress"
              width={44}
              height={45}
              className="2xl:w-[44px] xl:w-[44px] lg:w-[40px] md:w-[40px] sm:w-[30px] w-[25px]"
            />
          </a>
        </div>

        <p className="text-[#C3C3C3] font-lato text-[16px] font-medium max-w-[1019px] mt-[16px] mb-[50px]">
          <span
            dangerouslySetInnerHTML={{
              __html: techSection.provideDescription || "",
            }}
          />
        </p>

        <div className="border-gradient rounded-[40px] p-[1px]">
          <div className="bg-black 2xl:py-[70px] xl:py-[70px] lg:py-[60px] md:py-[50px] sm:py-[40px] py-[30px] rounded-[40px] 2xl:px-[105px] xl:px-[100px] lg:px-[80px] md:px-[60px] sm:px-[50px] px-[30px]">
            <div className="scroll-content h-[300px] overflow-hidden relative transition-all duration-500 ease-in-out">
              {technologies.map((tech: any, i: number) => {
                const settings = tech.technologiesSettings;
                return (
                  <div
                    key={i}
                    className="flex gap-[66px] justify-between items-center mb-12 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col"
                  >
                    <div className="2xl:w-[832px] xl:w-[832px] lg:w-[832px] md:w-full sm:w-full w-full">
                      <h3 className="h3 tracking-normal mb-4 text-white">
                        {settings.technologyName}
                      </h3>
                      <p className="font-lato font-medium 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[20px] sm:text-[20px] text-[20px] 2xl:leading-[39px] xl:leading-[39px] lg:leading-[39px] md:leading-[30px] sm:leading-[30px] leading-[25px] text-white mb-10">
                        {settings.technologyDescription}
                      </p>
                      <div className="button-box text-left">
                        <a
                          href={`/services/${tech?.slug}`}
                          className="inline-block group"
                        >
                          <div className="btn-primary-outline">
                            <div className="btn-primary">
                              {settings.readMoreLink?.title || "Read More"}
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="image-box">
                      <img
                        src={settings.technologyImage?.node?.sourceUrl}
                        alt={
                          settings.technologyImage?.node?.altText ||
                          settings.technologyName
                        }
                        className="w-full float-left"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
