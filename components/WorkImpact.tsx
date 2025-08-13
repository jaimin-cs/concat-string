"use client";
import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_POWERFUL_IMPACTS } from "@/lib/queries";
import { useRouter } from "next/navigation";

interface WorkImpactProps {
  showViewMore?: boolean;
}

const WorkImpact: React.FC<WorkImpactProps> = ({ showViewMore = true }) => {
  const [activeTab, setActiveTab] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();
  const { data } = useQuery(GET_POWERFUL_IMPACTS);
  const impactData = data?.page?.flexibleContent?.flexibleContent?.find(
    (item: any) => item?.powerfulImpactTitle
  );
  const title = impactData?.powerfulImpactTitle;
  const viewMore = impactData?.viewMoreButton;
  const projects = impactData?.project?.nodes || [];

  // Dynamic styles for each tab (by index)
  const tabStyles = [
    {
      gradient: "from-[#FD4B7A] to-[#4D00AE]", // Marketing
      progress: "bg-gradient-to-r from-[#FD4B7A] to-[#4D00AE]",
      overlay:
        "bg-[linear-gradient(180deg,_rgba(77,0,174,0)_58.54%,_rgba(147,30,153,0.457455)_81.79%,_#FD4B7A_117.07%)] group-hover:bg-[linear-gradient(180deg,_rgba(77,0,174,0.1)_0%,_#FD4B7A_100%)]",
    },
    {
      gradient: "from-[#031844] to-[#1E90FF]", // FX2
      progress:
        "bg-[linear-gradient(81.72deg,_#031844_-0.83%,_#1E90FF_142.62%)]",
      overlay:
        "bg-[linear-gradient(360deg,_#031844_0%,_rgba(3,24,68,0)_46.97%)] group-hover:bg-[linear-gradient(0deg,_#031844_-5.06%,_rgba(0,84,195,0.7)_100%)]",
    },
    {
      gradient: "bg-[#65953C]", // Eco
      progress: "bg-[#65953C]",
      overlay:
        "bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_0%,_rgba(101,149,60,0.6)_100%)] group-hover:bg-[linear-gradient(180deg,_rgba(38,83,0,0.7)_0%,_#65953C_100%)]",
    },
    {
      gradient: "from-[#F4784A] to-[#F04C46]", // QPWB
      progress: "bg-[linear-gradient(180deg,_#F4784A_0%,_#F04C46_100%)]",
      overlay:
        "bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_0%,_rgba(240,76,70,0.6)_100%)] group-hover:bg-[linear-gradient(180deg,_rgba(244,120,74,0.3)_0%,_#F04C46_100%)]",
    },
  ];
  // Helper to get analysis points by key
  const getAnalysisPoints = (project: any, key: string) => {
    return (
      project?.projectAnalysis?.find(
        (a: any) =>
          a.projectKey.trim().toLowerCase() === key.trim().toLowerCase()
      )?.projectKeyPoints || []
    );
  };

  useEffect(() => {
    if (!projects.length) return;

    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".works-tab-content");

    const activateTab = (index: number) => {
      tabButtons.forEach((btn, i) => {
        btn.classList.remove(
          "shadow-[0px_14px_44px_0px_#54A3DA33]",
          "opacity-100",
          "active"
        );
        btn.classList.add("opacity-70");

        const img = btn.querySelector("img");
        if (img) {
          img.classList.remove("opacity-100");
          img.classList.add("opacity-50");
        }

        const progress = btn.querySelector(".progress-inner") as HTMLElement;
        if (progress) {
          progress.style.transition = "none";
          progress.style.width = "0%";
        }

        const content = tabContents[i] as HTMLElement;
        if (content) content.classList.add("hidden");
      });

      const currentBtn = tabButtons[index];
      const currentContent = tabContents[index];

      if (!currentBtn || !currentContent) return;

      currentBtn.classList.add(
        "shadow-[0px_14px_44px_0px_#54A3DA33]",
        "opacity-100",
        "active"
      );
      currentBtn.classList.remove("opacity-70");

      const currentImg = currentBtn.querySelector("img");
      if (currentImg) {
        currentImg.classList.remove("opacity-50");
        currentImg.classList.add("opacity-100");
      }

      currentContent.classList.remove("hidden");

      const progress = currentBtn.querySelector(
        ".progress-inner"
      ) as HTMLElement;
      if (progress) {
        setTimeout(() => {
          progress.style.transition = "width 5s linear";
          progress.style.width = "100%";
        }, 50);
      }
    };

    // Initial activation
    activateTab(activeTab);

    // Start auto tab switching
    timerRef.current = setInterval(() => {
      const nextIndex = (activeTab + 1) % tabButtons.length;
      setActiveTab(nextIndex);
      activateTab(nextIndex);
    }, 5000);

    // Add click listeners
    tabButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        if (timerRef.current) clearInterval(timerRef.current);
        setActiveTab(index);
        activateTab(index);
      });
    });

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      tabButtons.forEach((button) =>
        button.replaceWith(button.cloneNode(true))
      );
    };
  }, [activeTab as number, projects.length]);
  return (
    <section className="works py-[120px] bg-black">
      <div className="container max-w-[1440px] px-[20px] mx-auto w-full">
        <div className="work-wrap flex flex-col justify-center items-center">
          <h2 className="h2 text-white text-center max-w-[1100px] 2xl:mb-[60px] xl:mb-[60px] lg:mb-[50px] md:mb-[40px] sm:mb-[30px] mb-[30px]">
            {title}
          </h2>

          <div className="works-tab w-full flex flex-col 2xl:gap-[60px] xl:gap-[60px] lg:gap-[50px] md:gap-[40px] sm:gap-[30px] gap-[30px]">
            <div className="works-tab-content-wrap">
              {projects.map((projNode: any, idx: number) => {
                const project = projNode.projectSettings;
                const style = tabStyles[idx % tabStyles.length];
                return (
                  <div
                    key={projNode.id}
                    className={`works-tab-content flex flex-col gap-[40px]${
                      activeTab === idx ? "" : " hidden"
                    }`}
                    data-tab={project?.projectTechnologyName
                      ?.toLowerCase()
                      .replace(/\s/g, "")}
                  >
                    <div className="flex flex-col items-start">
                      <span
                        className={`font-denton font-bold text-white text-[24px] leading-[100%] rounded-[12px] p-[10px] w-[278px] bg-gradient-to-b ${style.gradient} flex items-center justify-center`}
                      >
                        {project?.projectTechnologyName}
                      </span>
                      <h3 className="font-denton font-semibold text-white 2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[30px] sm:text-[30px] text-[30px] leading-[120%] pt-[8px] py-[16px]">
                        {project?.projectName}
                      </h3>
                      <p className="font-lato font-medium text-[#C3C3C3] text-[16px] leading-[26px]">
                        {project?.projectDescription}
                      </p>
                    </div>
                    <div className="flex justify-between gap-[20px] 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col">
                      <div className="flex flex-col gap-[30px]">
                        {/* col1  */}
                        <div className="flex flex-col items-start gap-[14px]">
                          <div className="relative">
                            <h4 className="font-denton font-semibold text-white text-[22px] leading-[34px] ps-[10px]">
                              Challenges
                            </h4>
                            <span
                              className={`absolute top-0 left-0 w-[4px] h-[36px] rounded-b-[20px] ${
                                style.gradient.includes("bg-")
                                  ? style.gradient
                                  : "bg-gradient-to-b " + style.gradient
                              }`}
                            ></span>
                          </div>
                          <ul className="flex flex-col gap-[10px] ps-[30px] list-disc">
                            {getAnalysisPoints(project, "Challenges").map(
                              (point: any, i: number) => (
                                <li
                                  key={i}
                                  className="font-lato font-normal text-[16px] leading-[26px] text-[#C3C3C3]"
                                >
                                  {point.projectKeyPoint}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                        {/* col2  */}
                        <div className="flex flex-col items-start gap-[14px]">
                          <div className="relative">
                            <h4 className="font-denton font-semibold text-white text-[22px] leading-[34px] ps-[10px]">
                              Proposed solution
                            </h4>
                            <span
                              className={`absolute top-0 left-0 w-[4px] h-[36px] rounded-b-[20px] ${
                                style.gradient.includes("bg-")
                                  ? style.gradient
                                  : "bg-gradient-to-b " + style.gradient
                              }`}
                            ></span>
                          </div>
                          <ul className="flex flex-col gap-[10px] ps-[30px] list-disc">
                            {getAnalysisPoints(
                              project,
                              "Proposed solution"
                            ).map((point: any, i: number) => (
                              <li
                                key={i}
                                className="font-lato font-normal text-[16px] leading-[26px] text-[#C3C3C3]"
                              >
                                {point.projectKeyPoint}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* col3  */}
                        <div className="flex flex-col items-start gap-[14px]">
                          <div className="relative">
                            <h4 className="font-denton font-semibold text-white text-[22px] leading-[34px] ps-[10px]">
                              Results & Impact
                            </h4>
                            <span
                              className={`absolute top-0 left-0 w-[4px] h-[36px] rounded-b-[20px] ${
                                style.gradient.includes("bg-")
                                  ? style.gradient
                                  : "bg-gradient-to-b " + style.gradient
                              }`}
                            ></span>
                          </div>
                          <ul className="flex flex-col gap-[10px] ps-[30px] list-disc">
                            {getAnalysisPoints(project, "Results & Impact").map(
                              (point: any, i: number) => (
                                <li
                                  key={i}
                                  className="font-lato font-normal text-[16px] leading-[26px] text-[#C3C3C3]"
                                >
                                  {point.projectKeyPoint}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                      <div className="relative h-full group overflow-hidden rounded-[20px]">
                        <div
                          className={`h-[480px] absolute inset-0 z-10 rounded-[20px] transition-all duration-500 ease-in-out ${style.overlay}`}
                        ></div>
                        <img
                          src={project?.projectImage?.node?.mediaItemUrl}
                          alt={
                            project?.projectImage?.node?.altText ||
                            "Project image"
                          }
                          className="h-[480px] relative rounded-[20px] transition-transform duration-500 ease-in-out 
                                group-hover:scale-[1.03] group-hover:-translate-y-[6px] group-hover:-translate-x-[4px] object-cover"
                          width="900"
                          height="480"
                        />
                        <div className="logo absolute top-[46px] 2xl:left-[86px] xl:left-[86px] lg:left-[70px] md:left-[60px] sm:left-[50px] left-[30px] opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out z-[9999]">
                          <img
                            src={project?.techImage?.node?.sourceUrl}
                            alt={project?.techImage?.node?.altText || "Logo"}
                            width="205"
                            height="111"
                            // className="2xl:w-[200px] xl:w-[200px] lg:w-[150px] md:w-[150px] sm:w-[130px] w-[120px]
                            //  h-[100px]"
                          />
                        </div>
                        <div className="hover-logo absolute top-[40px] 2xl:left-[40px] xl:left-[40px] lg:left-[40px] md:left-[30px] sm:left-[20px] left-[20px] transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 z-[9999]">
                          <img
                            src={project?.techImageHover?.node?.sourceUrl}
                            alt={
                              project?.techImageHover?.node?.altText ||
                              "Logo hover"
                            }
                            width="286"
                            height="155"
                            className="2xl:w-[286px] xl:w-[284px] lg:w-[200px] md:w-[200px] sm:w-[150px] w-[100px]
                          2xl:h-[154px] xl:h-[154px] lg:h-[150px] md:h-[150px] sm:h-[100px] h-[80px]"
                          />
                        </div>
                        <div className="absolute flex flex-col gap-[22px] items-start bottom-[34px] 2xl:left-[40px] xl:left-[40px] lg:left-[40px] md:left-[30px] sm:left-[20px] left-[20px] max-w-[800px] z-[9999]">
                          <p className="font-denton font-semibold 2xl:text-[28px] xl:text-[28px] lg:text-[25px] md:text-[20px] sm:text-[18px] text-[18px] 2xl:leading-[40px] xl:leading-[40px] lg:leading-[30px] md:leading-[25px] sm:leading-[20px] leading-[20px] text-white">
                            {project?.projectImageLabel}
                          </p>
                          {project?.readStoryLink?.url && (
                            <a
                              href={`/project-detail/${projNode?.slug}`}
                              className="font-denton font-semibold text-[18px] leading-[100%] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex items-center gap-[10px]"
                              rel="noopener noreferrer"
                            >
                              {project.readStoryLink.title}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="9"
                                height="16"
                                viewBox="0 0 9 16"
                                fill="none"
                              >
                                <path
                                  d="M8.60045 7.569L1.92526 0.893929C1.77087 0.739418 1.56477 0.654297 1.34502 0.654297C1.12526 0.654297 0.919166 0.739418 0.764777 0.893929L0.273196 1.38539C-0.0466799 1.70563 -0.0466799 2.22611 0.273196 2.54587L5.87852 8.15119L0.266976 13.7627C0.112587 13.9172 0.0273438 14.1232 0.0273438 14.3428C0.0273438 14.5627 0.112587 14.7687 0.266976 14.9233L0.758557 15.4147C0.913068 15.5692 1.11904 15.6543 1.3388 15.6543C1.55855 15.6543 1.76465 15.5692 1.91904 15.4147L8.60045 8.7335C8.7552 8.5785 8.8402 8.37155 8.83971 8.15155C8.8402 7.9307 8.7552 7.72387 8.60045 7.569Z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="works-tab-button grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-[30px]">
              {/* Dynamic Tab Buttons */}
              {projects.map((projNode: any, idx: number) => {
                const project = projNode.projectSettings;
                const style = tabStyles[idx % tabStyles.length];
                return (
                  <button
                    key={projNode.id}
                    type="button"
                    className={`tab-button bg-black border border-[#5B5B5B80] rounded-[10px] p-[30px] flex flex-col gap-[17px] items-center justify-center flex${
                      activeTab === idx
                        ? " shadow-[0px_14px_44px_0px_#54A3DA33] opacity-100 active"
                        : " opacity-70"
                    }`}
                    data-tab-target={project?.projectTechnologyName
                      ?.toLowerCase()
                      .replace(/\s/g, "")}
                  >
                    <img
                      src={project?.projectTechnologyImage?.node?.mediaItemUrl}
                      width="128"
                      height="70"
                      className={
                        activeTab === idx ? "opacity-100" : "opacity-50"
                      }
                      alt={project?.projectTechnologyName}
                    />
                    <span className="w-full h-[2px] bg-[#1E1E1E] rounded-[12px] overflow-hidden mt-[8px] block">
                      <span
                        className={`progress-inner block h-full ${style.progress}`}
                        style={{
                          width: activeTab === idx ? "100%" : "0%",
                          transition:
                            activeTab === idx ? "width 5s linear" : "none",
                        }}
                      ></span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          {showViewMore && viewMore?.url && (
            <a
              href={viewMore.url}
              className="group mt-[26px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="btn-primary-outline">
                <div className="btn-primary">{viewMore.title}</div>
              </div>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
export default WorkImpact;
