"use client";
import React, { useState } from "react";
import "@/css/about.css";
import { useQuery } from "@apollo/client";
import { GET_ABOUT_TECHNOLOGIES } from "@/lib/queries";

const Technology = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { data, loading, error } = useQuery(GET_ABOUT_TECHNOLOGIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const techData = data?.page.flexibleContent.flexibleContent.find(
    (item: any) => item.aboutTechnologiesTitle
  );
  const technologies = techData?.technologies;

  return (
    <section className="technology bg-[url(/images/tech-bg.png)] bg-cover bg-center 2xl:py-[135px] xl:py-[135px] lg:py-[120px] md:py-[100px] sm:py-[100px] py-[100px]">
      <div className="container max-w-[1420px] mx-auto px-[10px]">
        <div className="flex flex-col items-start gap-[60px]">
          <h2 className="h2 text-black">{techData?.aboutTechnologiesTitle}</h2>
          <div className="tec-wrap flex items-center justify-between 2xl:gap-[60px] xl:gap-[60px] lg:gap-[60px] md:gap-[40px] sm:gap-[30px] gap-[25px] 2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col flex-col w-full">
            {/* Tab Buttons */}
            <div className="tab-buttons grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-[20px] 2xl:w-[calc(100%-557px)] xl:w-[calc(100%-557px)] lg:w-full md:w-full sm:w-full w-full ">
              {technologies?.map((tech: any, index: any) => (
                <button
                  key={index}
                  type="button"
                  className={`tab-button relative group w-full overflow-hidden bg-white rounded-[10px] border ${activeTab === index
                    ? "border-transparent"
                    : "border-black/20"
                    } flex items-center justify-center py-[85px] px-[20px] hover:border-transparent h-full`}
                  onClick={() => setActiveTab(index)}
                >
                  <div
                    className={`tab-bg absolute inset-0 bg-cover bg-center ${activeTab === index ? "opacity-100" : "opacity-0"
                      } group-hover:opacity-100 transition-opacity duration-500 rounded-[10px] h-full w-full`}
                    style={{
                      backgroundImage: `url(${tech.aboutTechnologyBackPic.node.sourceUrl})`,
                    }}
                  ></div>
                  <div className="relative z-10 text-center">
                    <h2
                      className={`tab-title text-[22px] font-denton font-bold text-center ${activeTab === index ? "text-white" : "text-black"
                        } group-hover:text-white max-w-[168px]`}
                    >
                      {tech.aboutTechnologyTitle}
                    </h2>
                  </div>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="tab-contents 2xl:w-[446px] xl:w-[446px] lg:w-full md:w-full sm:w-full w-full h-full ">
              {technologies?.map((tech: any, index: any) =>
                activeTab === index ? (
                  <div
                    key={index}
                    className="tab-content bg-cover bg-center rounded-[10px] w-full py-[30px] px-[26px] h-full min-h-[497px]"
                    style={{
                      backgroundImage: `url(${tech.aboutTechnologiesImage.node.sourceUrl})`,
                    }}
                  >
                    <div className="flex flex-col gap-[20px] items-start">
                      <h4 className="text-[26px] font-denton font-bold text-black leading-[34px] text-white">
                        {tech.aboutTechnologiesDescriptionTitle}
                      </h4>
                      <div className="flex flex-col items-start gap-[15px]">
                        {tech.description.map((desc: any, i: any) => (
                          <div key={i} className="flex flex-col gap-[15px]">
                            <h5 className="font-lato font-bold 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[18px] text-[18px] leading-[100%] text-white">
                              {desc.listTitle}
                            </h5>
                            {desc.technologyList &&
                              desc.technologyList.some(
                                (item: any) => item.technologyName
                              ) && (
                                <ul className="flex items-center 2xl:gap-x-[30px] xl:gap-x-[30px] lg:gap-x-[40px] md:gap-x-[40px] sm:gap-x-[30px] gap-x-[30px] gap-y-[10px] list-disc ps-[18px] flex-wrap">
                                  {desc.technologyList.map(
                                    (item: any, j: any) =>
                                      item.technologyName && (
                                        <li
                                          key={j}
                                          className="font-lato font-normal text-[17px] leading-[100%] text-white"
                                        >
                                          {item.technologyName}
                                        </li>
                                      )
                                  )}
                                </ul>
                              )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;