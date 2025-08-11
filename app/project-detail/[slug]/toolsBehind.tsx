import React from "react";

interface Props {
  project: any;
  onLanguagesChange?: (langs: string[]) => void;
}
const ToolsBehind: React.FC<Props> = ({ project }) => {
  const projectSettings = project?.projectSettings;
  if (!projectSettings) return null;
  const {
    businessPerformanceTitle,
    businessPerformanceImage,
    performanceList,
  } = projectSettings;
  return (
    <>
      <section className="py-[120px]">
        <div className="container max-w-[1440px] px-[20px] mx-auto">
          <div className="bg-[#2E0707] rounded-[16px] 2xl:pt-[60px] xl:pt-[60px] lg:pt-[50px] md:pt-[40px] sm:pt-[30px] pt-[20px] 2xl:px-[90px] xl:px-[90px] lg:px-[60px] md:px-[60px] sm:px-[40px] px-[20px] 2xl:pb-[90px] xl:pb-[90px] lg:pb-[60px] md:pb-[60px] sm:pb-[40px] pb-[20px]">
            <h2 className="h2 text-center text-white mb-[80px]">
              {businessPerformanceTitle}
            </h2>
            <div className="flex items-top 2xl:gap-[60px] xl:gap-[50px] lg:gap-[40px] md:gap-[30px] sm:gap-[30px] gap-[30px] 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col">
              <div className="2xl:w-[440px] xl:w-[440px] lg:w-[440px] md:w-[440px] sm:w-full w-full">
                <img
                  src={businessPerformanceImage?.node?.sourceUrl}
                  className="w-full"
                  alt={businessPerformanceImage?.node?.altText}
                />
              </div>
              <ul className="2xl:w-[745px] xl:w-[745px] lg:w-[745px] md:w-[745px] sm:w-full w-full flex flex-col gap-[16px] items-start">
                {Array.isArray(performanceList) &&
                  performanceList.length > 0 &&
                  performanceList.map((item: any, index: number) => {
                    const raw: string = item?.performanceList;
                    const [lead, ...restParts] = raw.split(":");
                    const rest = restParts.join(":").trim();
                    return (
                      <li key={index} className="flex items-top gap-[10px]">
                        <svg
                          className="mt-[7px]"
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="10"
                          viewBox="0 0 21 10"
                          fill="none"
                        >
                          <path
                            d="M20.4086 5.57085L20.4079 5.57161L16.194 9.76516C15.8784 10.0793 15.3678 10.0781 15.0535 9.76242C14.7393 9.44674 14.7405 8.93613 15.0562 8.62194L17.8854 5.80645L0.806452 5.80645C0.361049 5.80645 0 5.4454 0 5C0 4.5546 0.361049 4.19355 0.806452 4.19355L17.8854 4.19355L15.0563 1.37806C14.7406 1.06387 14.7394 0.553265 15.0536 0.237578C15.3678 -0.0781879 15.8784 -0.0792761 16.1941 0.234837L20.408 4.42839L20.4087 4.42915C20.7245 4.74439 20.7235 5.25665 20.4086 5.57085Z"
                            fill="url(#paint0_linear_5059_10306)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_5059_10306"
                              x1="10.081"
                              y1="10"
                              x2="10.081"
                              y2="-5.35027"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#E72125" />
                              <stop offset="1" stopColor="#8E1D1D" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <p className="font-lato font-normal text-[18px] leading-[30px] text-white text-left">
                          {rest && (
                            <>
                              <b className="font-bold">{lead}:</b> {rest}
                            </>
                          )}
                        </p>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToolsBehind;
