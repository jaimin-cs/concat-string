import React from "react";
interface Props {
  project: any;
  onLanguagesChange?: (langs: string[]) => void;
}
const projectConclusion: React.FC<Props> = ({ project }) => {
  const projectSettings = project?.projectSettings;
  if (!projectSettings) return null;

  const { conclusionTitle, conclusionDescription } = projectSettings;

  return (
    <>
      <section className="pt-[100px]">
        <div className="container max-w-[1440px] px-[20px] mx-auto">
          <div className="flex flex-col items-left justify-left 2xl:gap-[60px] xl:gap-[60px] lg:gap-[70px] md:gap-[60px] sm:gap-[50px] gap-[30px]">
            <h2 className="h2 text-white text-left">{conclusionTitle}</h2>
            <div className="bg-[#2E0707] rounded-[16px] 2xl:p-[60px] xl:p-[60px] lg:p-[70px] md:p-[60px] sm:p-[50px] p-[30px]">
              <p className="font-lato font-normal 2xl:text-[30px] xl:text-[30px] lg:text-[25px] md:text-[25px] sm:text-[20px] text-[18px] 2xl:leading-[50px] xl:leading-[50px] lg:leading-[40px] md:leading-[40px] sm:leading-[30px] leading-[30px] text-white text-left">
                {conclusionDescription}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default projectConclusion;
