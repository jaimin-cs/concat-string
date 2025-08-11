import React from "react";

interface Props {
  project: any;
}

const ClientFeedback: React.FC<Props> = ({ project }) => {
  const feedbackData = project?.projectSettings;

  if (!feedbackData || !feedbackData.clientFeedbacks?.nodes?.length) {
    return null;
  }

  return (
    <section className="feedback 2xl:py-[120px] xl:py-[120px] lg:py-[100px] md:py-[80px] sm:py-[80px] py-[80px]">
      <div className="container max-w-[1432px] px-[20px] mx-auto">
        <div className="flex flex-col gap-[60px] items-center justify-center">
          <h2 className="h2 text-white text-center">
            {feedbackData.clientFeedbackTiitle}
          </h2>
          {feedbackData.clientFeedbacks.nodes.map(
            (feedbackNode: any, index: number) => {
              const feedback = feedbackNode.testimonialSettings;
              if (!feedback) return null;
              return (
                <div
                  key={index}
                  className="bg-[#0F0F0F] 2xl:py-[76px] xl:py-[76px] lg:py-[70px] md:py-[50px] sm:py-[30px] py-[30px] 2xl:px-[130px] xl:px-[130px] lg:px-[100px] lg:px-[80px] md:px-[50px] sm:px-[30px] px-[20px] rounded-[14px] shadow-[0px_24px_124px_rgba(231,33,37,0.22),_inset_0px_0px_20px_rgba(255,255,255,0.06)] 2xl:max-w-[1094px] xl:max-w-[1094px] lg:max-w-[1094px] md:max-w-full lg:max-w-full sm:max-w-full max-w-full"
                >
                  <div className="flex flex-col 2xl:gap-[50px] xl:gap-[50px] lg:gap-[40px] md:gap-[30px] sm:gap-[30px] gap-[20px] items-center justify-center">
                    <p
                      className="font-lato font-normal 2xl:text-[30px] xl:text-[30px] lg:text-[25px] md:text-[25px] sm:text-[20px] text-[20px] 2xl:leading-[50px] xl:leading-[50px] lg:leading-[40px] md:leading-[40px] sm:leading-[40px] leading-[30px] text-white text-center 2xl:max-w-[833px] xl:max-w-[833px] lg:max-w-[833px] md:max-w-full sm:max-w-full max-w-full"
                      dangerouslySetInnerHTML={{
                        __html: feedback.clientFeedback ,
                      }}
                    />
                    <div className="flex flex-col gap-[6px]">
                      <h4 className="font-denton font-bold 2xl:text-[30px] xl:text-[30px] lg:text-[25px] md:text-[25px] lg:text-[20px] sm:text-[18px] text-[18px] 2xl:leading-[42px] xl:leading-[42px] lg:leading-[40px] md:leading-[30px] sm:leading-[25px] leading-[20px] text-center text-white">
                        {feedback.clientName}
                      </h4>
                      <p className="font-lato text-[16px] font-medium leading-[26px] text-[#C3C3C3] text-center">
                        {feedback.clientDesignation}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;
