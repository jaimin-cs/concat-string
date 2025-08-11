"use client";
import { useState, useEffect } from "react";
import "@/css/services.css";
import { useQuery } from "@apollo/client";
import { GET_SERVICE_BANNER_FULL } from "@/lib/queries";

const Service = () => {
  const { data } = useQuery(GET_SERVICE_BANNER_FULL);

  // Extract dynamic data
  const techNode =
    data?.page?.flexibleContent?.flexibleContent?.[0]?.technologies?.nodes?.[0]
      ?.technologiesSettings;
  const serviceTitle = techNode?.serviceTitle || "";
  const serviceDescription = techNode?.serviceDescription || "";
  const features = techNode?.serviceFeature || [];

  // Dynamic tab state: use index for active tab
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  // Reset active tab to first when features change
  useEffect(() => {
    setActiveTabIdx(0);
  }, [features.length]);

  return (
    <section className="service bg-[url('/images/tech-bg.png')] bg-left py-[145px] bg-cover">
      <div className="container max-w-[1440px] px-[20px] mx-auto">
        <div className="flex flex-col gap-[60px]">
          <div className="flex flex-col gap-[16px]">
            <h2 className="h2 2xl:text-[86px] text-black">{serviceTitle}</h2>
            <p className="font-lato font-medium text-[16px] leading-[26px] text-[#414141] max-w-[1019px]">
              {serviceDescription}
            </p>
          </div>
          {/* Only render tabs if data is available */}
          {techNode && features.length > 0 && (
            <div className="flex items-start gap-[60px] 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col">
              <div className="service-tab flex flex-col gap-[20px] 2xl:w-[470px] xl:w-[470px] lg:w-[470px] md:w-full sm:w-full w-full">
                {features.map((feature: any, idx: number) => (
                  <button
                    key={feature?.featureTitle || idx}
                    type="button"
                    onClick={() => setActiveTabIdx(idx)}
                    className={`group p-[1px] border-[1px] rounded-[10px] transition-all duration-300 ${activeTabIdx === idx ? "" : "border-[#d1d1d1]"
                      }`}
                    style={
                      activeTabIdx === idx
                        ? {
                          background:
                            "linear-gradient(115.51deg, #E72125 32.11%, #8E1D1D 116.15%)",
                        }
                        : {}
                    }
                    onMouseEnter={(e) => {
                      if (activeTabIdx !== idx) {
                        e.currentTarget.style.background =
                          "linear-gradient(115.51deg, #E72125 32.11%, #8E1D1D 116.15%)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeTabIdx !== idx) {
                        e.currentTarget.style.background = "transparent";
                      }
                    }}
                  >
                    <div
                      className={`rounded-[10px] w-full h-full py-[20px] px-[30px] flex items-start justify-start transition-all duration-300 ${activeTabIdx === idx ? "bg-transparent" : "bg-white"
                        }`}
                    >
                      <span
                        className={`font-denton font-bold text-[22px] leading-[34px] text-left transition-all duration-300 ${activeTabIdx === idx ? "text-white" : "text-[#252525]"
                          }`}
                      >
                        {feature?.featureTitle || "Service"}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="service-tab-contents 2xl:w-[calc(100%-530px)] xl:w-[calc(100%-530px)] lg:w-[calc(100%-530px)] md:w-full sm:w-full w-full">
                {features.map((feature: any, idx: number) => (
                  <div
                    key={feature?.featureTitle || idx}
                    className={`service-tab-content rounded-[10px] border border-white shadow-custom 2xl:p-[50px] xl:p-[50px] lg:p-[40px] md:p-[40px] sm:p-[30px] p-[20px] flex flex-col items-start bg-[#D9D9D94D] h-[470px] overflow-y-auto scrollbar-hide ${activeTabIdx === idx ? "" : "hidden"
                      }`}
                    data-content={feature?.featureTitle || idx}
                  >
                    <h4 className="font-denton 2xl:text-[34px] xl:text-[34px] lg:text-[30px] md:text-[25px] sm:text-[20px] text-[20px] font-bold leading-[100%] text-black mb-[12px]">
                      {feature?.featureDescriptionTitle || ""}
                    </h4>
                    <p className="font-lato font-normal text-[17px] leading-[28px] text-[rgb(108,108,108)]">
                      {feature?.featureDescription || ""}
                    </p>
                    <ul className="flex flex-col gap-[12px] mt-[16px]">
                      {feature?.fratureDescription?.map(
                        (item: any, i: number) => (
                          <li
                            key={i}
                            className="flex items-start gap-[4px] flex-col"
                          >
                            <span className="flex items-center gap-[10px]">
                              <img
                                src="./images/service-page/bullet.svg"
                                width="10"
                                height="10"
                                alt="bullet"
                              />
                              <h4 className="font-denton font-bold text-[17px] leading-[28px] text-black w-[calc(100%-20px)]">
                                {item.listTitle}
                              </h4>
                            </span>
                            <p className="font-lato font-normal text-[16px] leading-[24px] text-[#6C6C6C] ms-[22px]">
                              {item.listDescription}
                            </p>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Service;
