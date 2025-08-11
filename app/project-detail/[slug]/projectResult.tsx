import React from "react";
interface Props {
  project: any;
  onLanguagesChange?: (langs: string[]) => void;
}
const projectResult: React.FC<Props> = ({ project }) => {
  const projectSettings = project?.projectSettings;
  if (!projectSettings) return null;

  const { resultTitle, resultImage, resultKeyPoints } = projectSettings;
  return (
    <>
      <section className="py-[120px]">
        <div className="container max-w-[1440px] px-[20px] mx-auto">
          <div className="flex flex-col 2xl:gap-[80px] xl:gap-[80px] lg:gap-[60px] md:gap-[50px] sm:gap-[40px] gap-[30px] items-start">
            <h2 className="h2 text-left text-white">{resultTitle}</h2>
            <div className="flex items-top justify-between 2xl:gap-[60px] xl:gap-[60px] lg:gap-[50px] md:gap-[40px] sm:gap-[30px] gap-[30px] 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col">
              <div className="rounded-[30px] 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-full sm:w-full w-full">
                <img
                  src={resultImage?.node?.sourceUrl}
                  className="w-full"
                  alt={resultImage?.node?.altText}
                />
              </div>
              <ul className="flex flex-col gap-[20px] 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-full sm:w-full w-full">
                {Array.isArray(resultKeyPoints) &&
                  resultKeyPoints.length > 0 &&
                  resultKeyPoints.map((item: any, idx: number) => (
                    <li
                      key={idx}
                      className="2xl:px-[30px] xl:px-[30px] lg:px-[30px] md:px-[20px] sm:px-[20px] px-[20px] py-[20px] rounded-[14px] bg-[#FFFFFF29] flex items-top gap-[10px] w-full"
                    >
                      <span className="bg-gradient-to-b from-[#E72125] to-[#8E1D1D] h-[10px] w-[10px] rounded mt-[10px]"></span>
                      <p className="font-lato font-semibold 2xl:text-[22px] xl:text-[22px] lg:text-[20px] md:text-[20px] sm:text-[18px] text-[18px] 2xl:leading-[38px] xl:leading-[38px] lg:leading-[30px] md:leading-[30px] sm:leading-[25px] leading-[25px] text-white w-[calc(100%-40px)]">
                        {item?.resultList}
                      </p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default projectResult;
